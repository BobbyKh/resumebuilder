from rest_framework import serializers
from api import models
from django.contrib.auth.models import User
from drf_extra_fields.fields import Base64ImageField
from allauth.socialaccount.models import SocialToken


class SocialToken (serializers.ModelSerializer):
    
    class Meta :
        model = SocialToken
        fields = '__all__'
   
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create (self , validated_data):
        user = User.objects.create_user(**validated_data)
        return user 




class AppointmentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AppointmentType
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Appointment
        fields = '__all__'
        
class PricingSerializer (serializers.ModelSerializer):

    features = serializers.JSONField()
    class Meta:
        model = models.Pricing
        fields = '__all__'
    


class AboutUsSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.AboutUs
        fields = '__all__'

class FAQSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.FAQ
        fields = '__all__'

class HeroSectionSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.HeroSection
        fields = '__all__'

class OrganizationSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Organization
        fields = '__all__'

        
class TestimonialSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Testimonial
        fields = '__all__'

class FooterSerializer(serializers.ModelSerializer):
    
    class Meta :
        model = models.FooterSection
        fields = '__all__'
        
class DocumentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DocumentCategory
        fields = '__all__'

class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Template 
        fields = '__all__'

class DocumentFieldSerializer(serializers.ModelSerializer):
    
    image = Base64ImageField(max_length=None, use_url=True)
    class Meta:
        model = models.DocumentField
        fields = '__all__'
        

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Experience
        fields = '__all__'

class PaymentSystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PaymentSystem
        fields = '__all__'
    
