from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from api import views
from django.conf import settings

urlpatterns = [

    path ('users', views.user_list, name='user_list'),
    path('accounts/google/login/', views.CustomGoogleLoginView.as_view(), name='google_login'),
    path ('appointments', views.AppointmentList.as_view(), name='appointment_list'),
    path ('appointment_types', views.AppointmentType.as_view(), name='appointment_type_list'),
    path ('pricing',views.PricingType.as_view(), name='pricing_list'),
    path ('pdftotext', views.convert_pdf_to_text, name='pdftotext'),
    path('aboutus', views.AboutUsView.as_view(), name='aboutus'),
    path('faq', views.FAQ.as_view(), name='faq_list'),
    path('aboutus', views.AboutUsView.as_view(), name='aboutus'),
    path('testimonials', views.TestimonialView.as_view(), name='testimonials'),
    path('hero', views.HeroSectionView.as_view(), name='hero'),
    path('organization', views.OrganizationView.as_view(), name='organization'),
    path ('footer', views.FooterSectionView.as_view(), name='footer'),
    path ('logout', views.logout_user, name='logout'),
    path('template', views.TemplateView.as_view(), name='template'),
    path('template/<int:id>', views.fetch_template, name='template'),
    path('documentcategory', views.DocumentCategoryView.as_view(), name='documentcategory'),
    path('category/<int:category_id>/templates', views.fetch_category_templates, name='fetch_category_templates'),
    path('documentfield', views.DocumentFieldsView.as_view(), name='documentfield'),
    path('documentfield/<int:template_id>', views.fetch_document_data, name='fetch_document_data'),
    path('documentfield/<int:id>/update', views.update, name='update'),
    path('experience', views.ExperienceView.as_view(), name='experience'),
    path('social-login/', views.SocialTokenLogin.as_view(), name='social-login'),
    path('get-auth-token/', views.get_auth_token, name='get-auth-token'),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)