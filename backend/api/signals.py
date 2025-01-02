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

# Automatically create a Profile on first login for regular users@receiver(user_logged_in)
def create_or_update_profile_on_login(sender, request, user, **kwargs):
    # Get or create the Profile for the logged-in user
    profile, created = Profile.objects.get_or_create(user=user)

    # Check if the user has any existing DocumentField
    document_field = DocumentField.objects.filter(user=user).all()

    if document_field:
        # If a DocumentField exists, link it to the Profile
        profile.document = document_field
    else:
        # Otherwise, create a new DocumentField
        document_field = DocumentField.objects.create(user=user, name=user.username)
        profile.document = document_field

    # Save the Profile
    profile.save()

@receiver(post_save, sender=DocumentField)
def update_profile_on_documentfield_save(sender, instance, created, **kwargs):
    if instance.user:
        # Update the Profile with the latest DocumentField
        profile, created = Profile.objects.get_or_create(user=instance.user)
        profile.document = instance
        profile.save()
