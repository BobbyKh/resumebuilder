from rest_framework import serializers
from api import models
from django.contrib.auth.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')






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

    image = serializers.SerializerMethodField()
    def get_image(self, obj):
        if obj.image:
            return obj.image.url
        return None

    class Meta:
        model = models.DocumentField
        fields = '__all__'

