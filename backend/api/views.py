from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Appointment, AppointmentType, ResumeCategory, ResumeTemplate
from api.serializer import AppointmentSerializer, AppointmentTypeSerializer, ResumeCategorySerializer, ResumeTemplateSerializer, UserSerializer
from django.contrib.auth.models import User
from allauth.socialaccount.providers.google.views import OAuth2LoginView
from rest_framework.generics import ListCreateAPIView



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

    



