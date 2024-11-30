from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class DocumentCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    icon = models.ImageField(max_length=100, null=True, blank=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Document Category"
        verbose_name_plural = "Document Categories"



class Template(models.Model):
    image = models.ImageField(upload_to='resume_templates/')
    doc_cat=models.ForeignKey(DocumentCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    template = models.FileField(upload_to='resume_templates/')
    html = models.TextField()
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return f"{self.name} ({self.template.name})"
    

class DocumentField(models.Model):
    template = models.ForeignKey(Template, on_delete=models.CASCADE, null=True)
    position=models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='resume_images/', null=True)
    name = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True, blank=True)
    certification = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True)
    linkedin = models.CharField(max_length=100, null=True)
    github = models.CharField(max_length=100, null=True)
    website= models.CharField(max_length=100, null=True)
    phone = models.IntegerField(max_length=20, null=True)
    project= models.TextField(max_length=100, null=True)
    address = models.TextField(null=True)
    skill = models.TextField(null=True)
    education = models.TextField(null=True)
    work_experience = models.TextField(null=True)
    achievement = models.TextField(null=True)
    hobbies = models.TextField(null=True)
    language = models.TextField(null=True)
    reference = models.TextField(null=True)
    extra = models.TextField(null=True)
    watermark=models.ImageField(upload_to='resume_images/', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['id']
    
    def __str__(self):
        return f" {self.name } with {self.template.name}"




class AppointmentType(models.Model):
    name = models.CharField(max_length=100)
    status = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
        
    
class Appointment(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    appointment_type = models.ForeignKey(AppointmentType, on_delete=models.CASCADE , null=True)
    
    def __str__(self):
        return f"{self.name} with {self.appointment_type.name}"

class Pricing (models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    features = models.TextField()

    def __str__(self):
        
        return self.name
    
    
    
class FAQ(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.question

class AboutUs(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='about_us/')

    def __str__(self):
        return self.name
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='testimonials/', null=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class HeroSection(models.Model):
    image = models.ImageField(upload_to='hero_section/')
    name = models.CharField(max_length=100)
    description = models.TextField()
    button_text = models.CharField(max_length=100, null=True)   
    status = models.BooleanField(default=True)
   
    def __str__(self):
        return self.name

class Organization(models.Model):
    name = models.CharField(max_length=100) 
    description = models.TextField()
    image = models.ImageField(upload_to='organizations/')
    logo= models.ImageField(upload_to='organizations/')
    status = models.BooleanField(default=True)
    slogans=models.TextField()
    email=models.EmailField()
    phone=models.CharField(max_length=20)
    address=models.TextField()
    facebook=models.CharField(max_length=100)
    twitter=models.CharField(max_length=100)
    instagram=models.CharField(max_length=100)
    linkedin=models.CharField(max_length=100)
def __str__(self):
        return f"{self.name}"

class FooterSection(models.Model):
    slug = models.SlugField(max_length=200)
    name = models.CharField(max_length=100)
    link = models.URLField()
    status = models.BooleanField(default=True)
    
    def _str_ (self):
        return f"{self.name}"
