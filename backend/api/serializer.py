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


class ResumeSerializer(serializers.ModelSerializer):
    html = serializers.SerializerMethodField()

    class Meta:
        model = models.Resume
        fields = '__all__'

    def get_html(self, obj):
        html_template = obj.template.html
        
        html = html_template.format(
            name=obj.name,
            email=obj.email,
            phone=obj.phone,
            address=obj.address,
            achievements=', '.join(obj.achievements),
            skills=', '.join(obj.skills),  
            education=', '.join(obj.education),  
            work_experience=', '.join(obj.work_experience),  
            hobbies=', '.join(obj.hobbies),  
            references=', '.join(obj.references)  
        )
        return html


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


