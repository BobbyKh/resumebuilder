from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class ResumeCategory(models.Model):
    image = models.ImageField(upload_to='resume_categories/', null=True)
    name = models.CharField(max_length=100)
    

    def __str__(self):
        return self.name
    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)


class ResumeTemplate(models.Model):
    image = models.ImageField(upload_to='resume_templates/')
    name = models.CharField(max_length=100)
    template = models.FileField(upload_to='resume_templates/')
    html = models.TextField()

    def __str__(self): 
        return f"{self.name} ({self.template.name})"

class Resume(models.Model):
    template = models.ForeignKey(ResumeTemplate, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='resume_images/', null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    skills = models.TextField(null=True, blank=True)
    education = models.TextField(null=True, blank=True)
    work_experience = models.TextField(null=True, blank=True)
    achievements = models.TextField(null=True, blank=True)
    hobbies = models.TextField(null=True, blank=True)
    references = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f" {self.name } with {self.template.name}"


class ResumeFile(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    file = models.FileField(upload_to='resume_files/')
 

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
