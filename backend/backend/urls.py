"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView , TokenRefreshView
from django.conf import settings
from api.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin/', include("django_admin_kubi.urls")),  # Django admin kubi URLS
    path("__reload__/", include("django_browser_reload.urls")),
    path ("api/", include("api.urls")),
    path ("accounts/", include("allauth.urls")),
    path ('ap-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path ('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path ('callback/', google_login_callback, name='callback'),
    path ('user/register/', UserCreate.as_view(), name='register'),
    path ('api/auth/user/', UserDetailView.as_view(), name='user'),
    path('api/google/validate_token/', validate_google_token, name='validate_google_token'),
    

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

