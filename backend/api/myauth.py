from django.contrib.auth.models import User

class MyAuthBackend:
    def authenticate(self, request, username=None, password=None, **kwargs):
        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):
            return user
        return None
