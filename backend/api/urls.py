from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from api import views
from django.conf import settings

urlpatterns = [

    path ('resume_category', views.resume_category_view, name='resume_category'),
    path ('resume_template', views.resume_template_view, name='resume_template'),
    path ('users', views.user_list, name='user_list'),
    path('accounts/google/login/', views.CustomGoogleLoginView.as_view(), name='google_login'),
    path ('appointments', views.AppointmentList.as_view(), name='appointment_list'),
    path ('appointment_types', views.AppointmentType.as_view(), name='appointment_type_list'),
    path ('pricing',views.PricingType.as_view(), name='pricing_list'),
    path ('pdftotext', views.convert_pdf_to_text, name='pdftotext'),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)