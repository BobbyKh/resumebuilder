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
    template = models.TextField()
    html = models.TextField()
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return self.name
    

class DocumentField(models.Model):
    template = models.ForeignKey(Template, on_delete=models.CASCADE, null=True, blank=True)
    position=models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='resume_images/', null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    certification = models.JSONField(default=list, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    linkedin = models.CharField(max_length=100, null=True, blank=True)
    github = models.CharField(max_length=100, null=True, blank=True)
    website= models.CharField(max_length=100, null=True, blank=True)
    phone = models.IntegerField( null=True, blank=True)
    project= models.JSONField(default=list, null=True, blank=True)
    address = models.JSONField(null=True, blank=True)
    skill = models.JSONField(default=list, null=True, blank=True)
    education = models.JSONField(default=list, null=True, blank=True) #models.TextField(null=True, blank=True)
    experience = models.JSONField(default=list, null=True, blank=True)
    achievement = models.JSONField(default=list, null=True, blank=True)
    hobbies = models.JSONField(default=list, null=True, blank=True)
    language = models.JSONField(default=list, null=True, blank=True)
    reference = models.TextField(null=True, blank=True)
    extra = models.TextField(null=True, blank=True)
    watermark=models.ImageField(upload_to='resume_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['id']
    
    def __str__(self):
        return self.name
    





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
        return self.name

class FooterSection(models.Model):
    slug = models.SlugField(max_length=200)
    name = models.CharField(max_length=100)
    link = models.URLField()
    status = models.BooleanField(default=True)
    
    def _str_ (self):
        return self.slug
    
class Experience(models.Model):
    years_of_experience = models.PositiveIntegerField(
        default=0,
        help_text="Enter the number of years of experience"
    )
    is_student = models.BooleanField(
        default=False,
        help_text="Indicate whether the user is a student."
    )
    decription = models.TextField(null=True, blank=True)
 
    def __str__(self):
        experience_str = f"{self.years_of_experience} year(s) of experience"
        return f"{experience_str} ({'Student' if self.is_student else 'Non-Student'})"



class PaymentSystem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    qr_code = models.ImageField(upload_to='payment_systems/')
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)


    def __str__(self):
        return self.name


class Tutorial(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    video_link = models.TextField( )
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name 
    
class Feature(models.Model):
    icon = models.ImageField(upload_to='features/')
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
    
    

class Branding(models.Model):
    name = models.CharField(max_length=100, help_text="Brand name")
    subtitle = models.CharField(max_length=300, help_text="Subtitle or tagline for the promotion")
    logo = models.ImageField(upload_to="brands/", help_text="Logo of the brand")    
    is_active = models.BooleanField(default=True, help_text="Is this promotion currently active?")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    

    def __str__(self):
        return f"{self.name} - {self.subtitle}"