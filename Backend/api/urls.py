from django.urls import path, include
from rest_framework.authtoken import views
from .views import home

urlpatterns = [
    path('', home, name='api.home'), #Base API url 
    path('category/', include('api.category.urls')), #API request url path for categories
    path('product/', include('api.product.urls')),  #API request url path for products
    path('user/', include('api.user.urls')), #API request url path for users data
    path('order/', include('api.order.urls')), #API request url path for order data
    path('payment/', include('api.payment.urls')), #API request url path for payment data
    path('api-token-auth/', views.obtain_auth_token, name='api_token_auth'),

]
