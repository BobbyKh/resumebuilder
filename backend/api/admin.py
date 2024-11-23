from django.contrib import admin
from api import models

# Register your models hera

# design admin interface
admin.site.site_title = "Resume Builder Admin"
admin.site.site_header = "Resume Builder"
admin.site.index_title = "Administration"
admin.site.register( [
    models.Resume,
    models.ResumeTemplate,
    models.ResumeCategory,
    models.ResumeFile,
    models.AppointmentType,
    models.Appointment,
    models.Pricing,
    models.AboutUs,
    models.FAQ,
    
 
])
