from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import ResumeCategory, ResumeTemplate
from api.serializer import ResumeCategorySerializer, ResumeTemplateSerializer, UserSerializer
from django.contrib.auth.models import User
from allauth.socialaccount.providers.google.views import OAuth2LoginView



# Create your views here.
@api_view(['GET'])
def user_list(request):
    pass

    query_set = User.objects.all()
    serializer = UserSerializer(query_set, many=True)
    print(serializer.data)
    return Response(serializer.data)




@api_view(['GET'])
def resume_category_view(request):
    pass

    queryset = ResumeCategory.objects.all()
    serializer = ResumeCategorySerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])

def resume_template_view(request):
    pass

    queryset = ResumeTemplate.objects.all()
    serializer = ResumeTemplateSerializer(queryset, many=True)
    return Response(serializer.data)


class CustomGoogleLoginView(OAuth2LoginView):
    def dispatch(self, request, *args, **kwargs):
        # Add any custom logic here if needed
        if request.user.is_authenticated:
            return redirect('/')
    
        return super().dispatch(request, *args, **kwargs)

    


