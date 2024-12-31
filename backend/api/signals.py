from django.db.models.signals import post_save
from django.dispatch import receiver
from allauth.socialaccount.signals import social_account_added
from django.contrib.auth.signals import user_logged_in
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import Profile, DocumentField

# Generate a token for a new user added via social accounts
@receiver(social_account_added)
def generate_token_for_new_user(sender, request, sociallogin, **kwargs):
    user = sociallogin.user
    if not Token.objects.filter(user=user).exists():
        Token.objects.create(user=user)

    # Automatically create a Profile for the new user
    profile, created = Profile.objects.get_or_create(user=user)
    if created:
        # Create a default DocumentField and associate it with the Profile
        document_field = DocumentField.objects.create(user=user, name=user.username)
        profile.document = document_field
        profile.save()

# Automatically create a Profile on first login for regular users
@receiver(user_logged_in)
def create_profile_on_login(sender, request, user, **kwargs):
    profile, created = Profile.objects.get_or_create(user=user)
    if created:
        # Create a default DocumentField and associate it with the Profile
        document_field = DocumentField.objects.create(user=user, name=user.username)
        profile.document = document_field
        profile.save()
