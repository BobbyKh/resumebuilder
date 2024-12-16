from django.db.models.signals import post_save
from django.dispatch import receiver
from allauth.socialaccount.signals import social_account_added
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

@receiver(social_account_added)
def generate_token_for_new_user(sender, request, sociallogin, **kwargs):
    user = sociallogin.user
    if not Token.objects.filter(user=user).exists():
        Token.objects.create(user=user)
