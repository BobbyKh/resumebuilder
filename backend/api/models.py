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
    image = models.ImageField(upload_to='resume_images/')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    skills = models.TextField()
    education = models.TextField()
    work_experience = models.TextField()
    achievements = models.TextField()
    hobbies = models.TextField()
    references = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    


    def __str__(self):
        return self.name 


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

class Pricing (models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    features = models.TextField()

    def __str__(self):
        
        return self.name