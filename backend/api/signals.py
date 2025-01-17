from django.db.models.signals import post_save
from django.dispatch import receiver
from allauth.socialaccount.signals import social_account_added
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import Profile

@receiver(social_account_added)
def generate_token_for_new_user(sender, request, sociallogin, **kwargs):
    user = sociallogin.user
    if not Token.objects.filter(user=user).exists():
        Token.objects.create(user=user)

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()
