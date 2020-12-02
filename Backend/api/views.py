from django.http import JsonResponse

# Create your views here.


def home(request):
    return JsonResponse({'info': 'Online Book Store', 'name': "Debarshi"}) # base json response
