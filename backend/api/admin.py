from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from api import models

# Register your models here
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'email',  'first_name', 'last_name')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    ordering = ('username',)
    readonly_fields = ('image_preview',)
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    def image_preview(self, obj):
        return obj.image and u'<img src="%s" />' % obj.image.url

    image_preview.short_description = 'Image preview'
    image_preview.allow_tags = True

admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)

# Register other models
admin.site.register([
    models.PaymentSystem,
    models.AppointmentType,
    models.Appointment,
    models.Pricing,
    models.AboutUs,
    models.FAQ,
    models.Testimonial,
    models.HeroSection,
    models.Organization,
    models.FooterSection,
    models.DocumentField,
    models.Template,
    models.DocumentCategory,
    models.Experience,
    models.Tutorial,
    models.Feature,
    models.Branding,
    models.ResumeLayout,
    models.GalleryImage,
    models.Counter,
    models.HowItWorks,
  
   
])

for model in admin.site._registry.values():
    if not hasattr(model, 'image'):
        continue
    model.readonly_fields = model.readonly_fields + ('image_preview',)
    model.fieldsets = (
        (None, {'fields': [f for f in model.fieldsets[0][1]['fields'] if f != 'image']}),
        ('Image preview', {'fields': ('image_preview',)}),
    )




