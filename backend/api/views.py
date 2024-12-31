import json
import logging

from django.http import JsonResponse
from django.shortcuts import redirect
logger = logging.getLogger(__name__)
from allauth.socialaccount.models import SocialToken 
from rest_framework.response import Response
from api.models import Experience, Feature, PaymentSystem, Tutorial
# from dj_rest_auth.registration.views import SocialLoginView
from api.serializer import ExperienceSerializer, FeatureSerializer, PaymentSystemSerializer, TutorialSerializer
from api.models import AboutUs, Appointment, AppointmentType, DocumentCategory, DocumentField, Experience, FooterSection, HeroSection, Organization, Pricing, Template, Testimonial,FAQ
from api.serializer import AboutUsSerializer, AppointmentSerializer, AppointmentTypeSerializer, DocumentCategorySerializer, DocumentFieldSerializer, ExperienceSerializer,  FAQSerializer, HeroSectionSerializer, OrganizationSerializer, PricingSerializer, TemplateSerializer, TestimonialSerializer, UserSerializer ,FooterSerializer
from django.contrib.auth.models import User
from rest_framework.generics import ListCreateAPIView
from pypdf import PdfReader
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from rest_framework import status
import re
from allauth.socialaccount.models import SocialAccount
from django.contrib.auth.decorators import login_required 
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view 
from rest_framework_simplejwt.tokens import RefreshToken
from pypdf import PdfReader
from rest_framework.permissions import IsAuthenticated , AllowAny   
from rest_framework import generics
from django.contrib.auth import get_user_model

User = get_user_model()


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserCreate(generics.CreateAPIView):
    
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes  = [AllowAny]

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer  
    permission_classes  = [IsAuthenticated]
    
    
    def get_object(self):
        return self.request.user 
    

@login_required
def google_login_callback(request):
    
    user = request.user 

    print ("User:", user)
    
    social_accounts = SocialAccount.objects.filter(user=user)
    
    social_account = social_accounts.first()
    
    if not social_account:
        print ("No social account found for user",user)
        return redirect ('http://localhost:5173/login/callback/?error=NoSocialAccountFound') 
    
    token = SocialToken.objects.filter(account=social_account).first()
    
    if token:
        print ('Google Token found    :', token.token)
        refresh = RefreshToken.for_user(user)   
        access_token = str(refresh.access_token)
        google_access_token = token.token
        print ('Access Token :', access_token)
        
        return redirect (f'http://localhost:5173/login/callback/?access_token={access_token} &google_access_token={google_access_token}')
    
    else :
        print ( 'No google token found !!')
        return redirect ( f"http://localhost:5173/login/callback/?error=NoGoogleTokenFound")
    
    
    

@csrf_exempt 
def validate_google_token(request):
    
    if request.method == 'POST':
        try :
            
            data = json.loads(request.body)
            google_access_token = data.get('access_token')
            print ('Google Access Token :', google_access_token)
            
            if not google_access_token:
                return JsonResponse({'error': 'No Google Access Token provided'}, status=400)
            return JsonResponse({'access_token': google_access_token}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

    
      
    

  

class DocumentFieldEditView (APIView):
    def get(self, request, *args, **kwargs):
        template_id = kwargs.get('template_id')
        try:
            template = Template.objects.get(id=template_id)
        except Template.DoesNotExist:
            return Response({"error": "Template matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)
        
        document_field_id = kwargs.get('document_field_id')
        try:
            document_field = DocumentField.objects.get(id=document_field_id, template=template)
        except DocumentField.DoesNotExist:
            return Response({"error": "Document field matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = DocumentFieldSerializer(document_field)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        template_id = kwargs.get('template_id')
        try:
            template = Template.objects.get(id=template_id)
        except Template.DoesNotExist:
            return Response({"error": "Template matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = DocumentFieldSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(template=template)
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, *args, **kwargs):
        template_id = kwargs.get('template_id')
        try:
            template = Template.objects.get(id=template_id)
        except Template.DoesNotExist:
            return Response({"error": "Template matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)
        
        document_field_id = kwargs.get('document_field_id')
        try:
            document_field = DocumentField.objects.get(id=document_field_id, template=template)
        except DocumentField.DoesNotExist:
            return Response({"error": "Document field matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = DocumentFieldSerializer(document_field, data=request.data)
        if serializer.is_valid():
            old_value = document_field.value
            serializer.save()
            new_value = document_field.value
            return Response({'old_value': old_value, 'new_value': new_value})
        return Response(serializer.errors)

    def delete(self, request, *args, **kwargs):
        template_id = kwargs.get('template_id')
        try:
            template = Template.objects.get(id=template_id)
        except Template.DoesNotExist:
            return Response({"error": "Template matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)
        
        document_field_id = kwargs.get('document_field_id')
        try:
            document_field = DocumentField.objects.get(id=document_field_id, template=template)
        except DocumentField.DoesNotExist:
            return Response({"error": "Document field matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)
        
        old_value = document_field.value
        document_field.delete()
        return Response({'old_value': old_value}, status=status.HTTP_204_NO_CONTENT)
        
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
    queryset = HeroSection.objects.all()
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


class TutorialView (ListCreateAPIView):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer





class FeatureView (ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer
    
    