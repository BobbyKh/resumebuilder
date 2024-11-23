from django.http import JsonResponse
from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.decorators import api_view
<<<<<<< HEAD
from api.models import AboutUs, Appointment, AppointmentType, Pricing, ResumeCategory, ResumeTemplate
from api.serializer import AboutUsSerializer, AppointmentSerializer, AppointmentTypeSerializer, PricingSerializer, ResumeCategorySerializer, ResumeTemplateSerializer, UserSerializer
=======
from api.models import Appointment, AppointmentType, Pricing, ResumeCategory, ResumeTemplate
from api.serializer import AppointmentSerializer, AppointmentTypeSerializer, FAQSerializer, PricingSerializer, ResumeCategorySerializer, ResumeTemplateSerializer, UserSerializer
from api.models import AboutUs, Appointment, AppointmentType, HeroSection, Pricing, ResumeCategory, ResumeTemplate, Testimonial
from api.serializer import AboutUsSerializer, AppointmentSerializer, AppointmentTypeSerializer, HeroSectionSerializer, PricingSerializer, ResumeCategorySerializer, ResumeTemplateSerializer, TestimonialSerializer, UserSerializer
>>>>>>> f12628adfe44ddbda5d9dbca5edfaae042bb481c
from django.contrib.auth.models import User
from allauth.socialaccount.providers.google.views import OAuth2LoginView
from rest_framework.generics import ListCreateAPIView
from pypdf import PdfReader




# Create your views here.
@api_view(['GET'])
def user_list(request):
    pass

    query_set = User.objects.all()
    serializer = UserSerializer(query_set, many=True)
    print(serializer.data)
    return Response(serializer.data)


from django.core.mail import send_mail
from django.conf import settings

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
    

@api_view(['GET'])
def resume_category_view(request):
    pass

    queryset = ResumeCategory.objects.all()
    serializer = ResumeCategorySerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])

def resume_template_view(request):
    pass

    queryset = ResumeTemplate.objects.all()
    serializer = ResumeTemplateSerializer(queryset, many=True)
    return Response(serializer.data)


    

    
class CustomGoogleLoginView(OAuth2LoginView):
    def dispatch(self, request, *args, **kwargs):
        # Add any custom logic here if needed
        if request.user.is_authenticated:
            return redirect('/')
    
        return super().dispatch(request, *args, **kwargs)

    
class PricingType(ListCreateAPIView):
    queryset = Pricing.objects.all()
    serializer_class = PricingSerializer
    
import csv
import re
from io import StringIO
from rest_framework.decorators import api_view
from rest_framework.response import Response
from pypdf import PdfReader

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

<<<<<<< HEAD
=======



class FAQ(ListCreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


>>>>>>> f12628adfe44ddbda5d9dbca5edfaae042bb481c
class AboutUsView(ListCreateAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


    
<<<<<<< HEAD
=======
class TestimonialView(ListCreateAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class HeroSectionView(ListCreateAPIView):
    queryset = HeroSection.objects.all()
    serializer_class = HeroSectionSerializer
>>>>>>> f12628adfe44ddbda5d9dbca5edfaae042bb481c
