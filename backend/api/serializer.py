from rest_framework import serializers
from api import models
from django.contrib.auth.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')



class ResumeCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ResumeCategory
        fields = '__all__'


class ResumeTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ResumeTemplate
        fields = '__all__'
        
class GoogleAuthSerializer(serializers.Serializer):
    auth_token = serializers.CharField()
    

class AppointmentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AppointmentType
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Appointment
        fields = '__all__'
        
class PricingSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Pricing
        fields = '__all__'
    




        
    


