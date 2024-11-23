from django.contrib import admin
from api import models

# Register your models here.

admin.site.register( [
    models.Resume,
    models.ResumeTemplate,
    models.ResumeCategory,
    models.ResumeFile
])