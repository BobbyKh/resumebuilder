from django.urls import path
from django.conf.urls.static import static
from api import views
from django.conf import settings


urlpatterns = [

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
    path('template', views.TemplateView.as_view(), name='template'),
    path('template/<int:id>', views.fetch_template, name='template'),
    path('documentcategory', views.DocumentCategoryView.as_view(), name='documentcategory'),
    path('category/<int:category_id>/templates', views.fetch_category_templates, name='fetch_category_templates'),
    path('documentfield', views.DocumentFieldsView.as_view(), name='documentfield'),
    path('documentfield/<int:template_id>', views.fetch_document_data, name='fetch_document_data'),
    path('documentfield/edit/<int:template_id>/<int:document_field_id>', views.DocumentFieldEditView.as_view(), name='documentfield'),
    path('experience', views.ExperienceView.as_view(), name='experience'),
    path ('pricing/<int:id>', views.PricingDetail.as_view(), name='suscription'),
    path ('paymentsystem', views.PaymentSystemView.as_view(), name='paymentsystem'),
    path ('tutorial', views.TutorialView.as_view(), name='tutorial'),
    path('feature', views.FeatureView.as_view(), name='feature'),
    path('branding', views.BrandingView.as_view(), name='branding'),
    

    #AUTH_TOKEN

    path ('users', views.UserList.as_view(), name='users'),
    path ('userdetails', views.UserDetailView.as_view(), name='userdetails'),
    
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)