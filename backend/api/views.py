import logging
logger = logging.getLogger(__name__)
from allauth.socialaccount.models import SocialToken
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Experience, PaymentSystem
from dj_rest_auth.registration.views import SocialLoginView
from api.serializer import ExperienceSerializer, PaymentSystemSerializer
from api.models import AboutUs, Appointment, AppointmentType, DocumentCategory, DocumentField, Experience, FooterSection, HeroSection, Organization, Pricing, Template, Testimonial,FAQ
from api.serializer import AboutUsSerializer, AppointmentSerializer, AppointmentTypeSerializer, DocumentCategorySerializer, DocumentFieldSerializer, ExperienceSerializer,  FAQSerializer, HeroSectionSerializer, OrganizationSerializer, PricingSerializer, TemplateSerializer, TestimonialSerializer, UserSerializer ,FooterSerializer
from django.contrib.auth.models import User
from rest_framework.generics import ListCreateAPIView
from allauth.socialaccount.models import SocialAccount
from pypdf import PdfReader
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.response import Response
from rest_framework import status
import re
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_framework import status
from rest_framework.decorators import api_view
from pypdf import PdfReader
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework import status
from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.providers.google.views import OAuth2LoginView
from django.contrib.auth.models import User
from rest_framework.views import APIView
from allauth.socialaccount.providers.oauth2.client import OAuth2Error

class SocialTokenLogin(APIView):
    """
    Verify social token and authenticate user.
    """

    def post(self, request, *args, **kwargs):
        social_token = request.data.get('token')
        provider = request.data.get('provider')  # e.g., 'google'

        if not social_token or not provider:
            return Response({"error": "Token and provider are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Verify token using provider's verification logic (e.g., Google, Facebook)
            user_info = self.verify_social_token(provider, social_token)
            email = user_info.get("email")

            # Check if a user exists with this email
            user, created = User.objects.get_or_create(username=email, email=email)

            if created:
                user.first_name = user_info.get("first_name", "")
                user.last_name = user_info.get("last_name", "")
                user.save()

            # Generate or retrieve the user's auth token
            token, _ = Token.objects.get_or_create(user=user)

            return Response({"token": token.key, "user_id": user.id, "email": user.email}, status=status.HTTP_200_OK)

        except OAuth2Error as e:
            return Response({"error": f"Social token verification failed: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def verify_social_token(self, provider, token):
        """
        Verify the provided token using the corresponding provider's API.
        For Google, you can use the `google.auth` library.
        """
        if provider == 'google':
            from google.oauth2 import id_token
            from google.auth.transport import requests

            try:
                idinfo = id_token.verify_oauth2_token(token, requests.Request())
                if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                    raise ValueError('Wrong issuer.')
                return idinfo
            except ValueError as e:
                raise OAuth2Error(f"Invalid Google token: {str(e)}")

        # Add logic for other providers (Facebook, etc.)
        raise OAuth2Error(f"Unsupported provider: {provider}")


@api_view(['POST'])
def logout_user(request):
    """
    Logout the user by deleting their auth token.
    """
    if request.user.is_authenticated:
        request.user.auth_token.delete()
        return Response({"message": "Logged out successfully."}, status=status.HTTP_200_OK)
    return Response({"error": "User not authenticated."}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def get_auth_token(request):
    """
    Endpoint to generate or retrieve an auth token for a user.
    """
    if request.user.is_authenticated:
        token, created = Token.objects.get_or_create(user=request.user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)
    return Response({"error": "Authentication required"}, status=status.HTTP_401_UNAUTHORIZED)


class SecureView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "This is a secure view."})




@api_view(['GET'])
def get_social_accounts(request):
    if request.user.is_anonymous:
        return Response({'error': 'User not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
    social_accounts = SocialAccount.objects.filter(user=request.user)
    data = [
        {
            "platform": account.provider,
            "username": account.extra_data.get("name", ""),
            "email": account.extra_data.get("email", ""),
            "avatar": account.extra_data.get("picture", ""),
            "token": SocialToken.objects.filter(account=account).first().token if SocialToken.objects.filter(account=account).exists() else None
        }
        for account in social_accounts
    ]
    return Response(data)



# Create your views here.
@api_view(['GET'])
def user_list(request):
    pass

    query_set = User.objects.all()
    serializer = UserSerializer(query_set, many=True)
    print(serializer.data)
    return Response(serializer.data)


class AppointmentList(ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        new_appointment = Appointment.objects.get(pk=response.data['id'])
        print(new_appointment.email)
        message = f'Name: {new_appointment.name}\nEmail: {new_appointment.email}\nPhone: {new_appointment.phone}\nDate: {new_appointment.date}\nTime: {new_appointment.time}\nMessage: {new_appointment.message}\nAppointment Type: {new_appointment.appointment_type.name}'
        send_mail(
            
            'Appointment Request  ' + new_appointment.name, 
            message, 
            settings.EMAIL_HOST_USER, 
            [settings.EMAIL_HOST_USER, new_appointment.email], 
            fail_silently=False
        )
        return response

class AppointmentType(ListCreateAPIView):
    queryset = AppointmentType.objects.all()
    serializer_class = AppointmentTypeSerializer

class GoogleLoginView(SocialLoginView):

    adapter_class = GoogleOAuth2Adapter

    def get_response(self):
        response = super().get_response()
        user = self.user  # Authenticated user

        if user.is_authenticated:
            # Retrieve the social token if it exists
            try:
                token = SocialToken.objects.get(account__user=user, account__provider='google')
                response.data['token'] = token.token
            except SocialToken.DoesNotExist:
                # If token doesn't exist, create a new one
                account = user.socialaccount_set.get(provider='google')
                token = SocialToken.objects.create(account=account)
                response.data['token'] = token.token

        # Return the response with the token data included
        return response



    
class PricingType(ListCreateAPIView):
    queryset = Pricing.objects.all()
    serializer_class = PricingSerializer
    

@api_view(['POST'])
def convert_pdf_to_text(request):
    """
   Experience, and Skills, and saves it as a CSV file.
    """
    if request.method == 'POST':
        pdf_file = request.FILES['pdf_file']
        pdf_reader = PdfReader(pdf_file)
        text = ''
        
        # Extract text from PDF
        for page in pdf_reader.pages:
            text += page.extract_text()
        
        # Clean up text
        text = re.sub(r'\n\s*\n', '\n\n', text).strip()
        # Parse the text for structured fields
        # (You will need to adjust these patterns to fit your actual data format)
        name_match = re.search(r'(?i)(name[:\-]?\s*)([A-Za-z\s]+)', text)
        name = name_match.group(2).strip() if name_match else "Unknown"
        
        address_match = re.search(r'(?i)(address|location|street[:\-]?\s*)(.+)', text, re.DOTALL)
        address = address_match.group(2).strip() if address_match else "Not Provided"
        
        email_match = re.search(r'(?i)(email|gmail[:\-]?\s*)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})', text, re.DOTALL)
        email = email_match.group(2).strip() if email_match else "Not Provided"
        
        phone_match = re.search(r'(?i)(phone|mobile|contact[:\-]?\s*)(\+\d{1,3}\s?\d{1,3}\s?\d{1,3}\s?\d{1,3})', text, re.DOTALL)
        phone = phone_match.group(2).strip() if phone_match else "Not Provided"
        
        experience_match = re.search(r'(?i)(experience|work experience[:\-]?\s*)(.+?)(skills|$)', text, re.DOTALL)
        experience = experience_match.group(2).strip() if experience_match else "Not Provided"
        
        skills_match = re.search(r'(?i)(skills|technical skills|work experience|expertise[:\-]?\s*)(.+)', text, re.DOTALL)
        skills = skills_match.group(2).strip() if skills_match else "Not Provided"
        
        education_match = re.search(r'(?i)(education|higher education|secondary|university[:\-]?\s*)(.+)', text, re.DOTALL)
        education = education_match.group(2).strip() if education_match else "Not Provided"
        
        structured_data = [
            {
                "Name": name,
                "Email": email ,
                "Phone": phone,
                "Address": address,
                "Education": education,
                "Experience": experience,
                "Skills": skills
            }
        ]
        print(structured_data)
        import json
        with open('output.json', 'w') as f:
            json.dump(structured_data, f)
        
    return Response(structured_data , status=200)




class FAQ(ListCreateAPIView):
    queryset = FAQ.objects.filter(status=True)
    serializer_class = FAQSerializer


class AboutUsView(ListCreateAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


    
class TestimonialView(ListCreateAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class HeroSectionView(ListCreateAPIView):
    queryset = [HeroSection.objects.first()]
    serializer_class = HeroSectionSerializer

class OrganizationView(ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer


class FooterSectionView(ListCreateAPIView):
    queryset = FooterSection.objects.filter(slug='Solution')
    serializer_class = FooterSerializer



class DocumentCategoryView(ListCreateAPIView):
    queryset = DocumentCategory.objects.all()
    serializer_class = DocumentCategorySerializer

class TemplateView(ListCreateAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer


@api_view(['GET'])
def fetch_template(request, id: int):
    """Fetch a single template with id"""
    try:
        template = Template.objects.get(id=id)
        serializer = TemplateSerializer(template)
        return Response(serializer.data)
    except Template.DoesNotExist:
        return Response({"error": "Template not found"}, status=404)

@api_view(['GET'])
def fetch_document_data(request, template_id: int):
    try:
        templates = DocumentField.objects.filter(template=template_id)
        serializer = DocumentFieldSerializer(templates, many=True)
        return Response(serializer.data)
    except Template.DoesNotExist:
        return Response({"error": "Template not found"}, status=404)
    
@api_view(['GET'])
def fetch_category_templates(request, category_id: int):
    try:
        # Fetch the DocumentCategory based on the provided category_id
        document_category = DocumentCategory.objects.get(id=category_id)
        
        # Retrieve all templates related to this category
        templates = document_category.template_set.all()
        
        # Serialize the templates
        serialized_templates = TemplateSerializer(templates, many=True)
        
        # Return the serialized data as a JSON response
        return Response(serialized_templates.data)
    
    except DocumentCategory.DoesNotExist:
        # Return a 404 error response if the category is not found
        return Response({"error": "Document category not found"}, status=status.HTTP_404_NOT_FOUND)

class DocumentFieldsView(ListCreateAPIView):
    queryset = DocumentField.objects.all()
    serializer_class = DocumentFieldSerializer
    

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        if not queryset.exists():
            dummy_data = [
                {
                    "Name": "Dummy Name",
                    "Email": "dummy@example.com",
                    "Phone": "1234567890",
                    "Address": "123 Dummy Street",
                    "Education": "Dummy Education",
                    "Experience": "Dummy Experience",
                    "Skills": "Dummy Skills"
                }
            ]
            return Response(dummy_data, status=status.HTTP_200_OK)
        
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST','PUT', 'PATCH' , 'DELETE'])
def update(request, id):
    try:
        instance = DocumentField.objects.get(id=id)
    except DocumentField.DoesNotExist:
        return Response({"error": "Object not found"}, status=status.HTTP_404_NOT_FOUND)
    
    partial = request.method == 'PATCH'
    serializer = DocumentFieldSerializer(instance, data=request.data, partial=partial)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExperienceView(ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class PricingDetail(APIView):
    def get(self, request, id: int):
        try:
            queryset = Pricing.objects.get(id=id)
            serializer = PricingSerializer(queryset)
            return Response(serializer.data)
        except Pricing.DoesNotExist:
            return Response({"error": "Object not found"}, status=status.HTTP_404_NOT_FOUND)
        
    
class PaymentSystemView(ListCreateAPIView):
    queryset = PaymentSystem.objects.all()
    serializer_class = PaymentSystemSerializer

    
    