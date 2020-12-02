from django.urls import path, include
from . import views

urlpatterns = [
    path('gettoken/<str:id>/<str:token>/',
         views.generate_token, name="token.generate"), #url path for getting token
    path('process/<str:id>/<str:token>/',
         views.process_payment, name="payment.process"), #url path for payment option
]
