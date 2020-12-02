from rest_framework import viewsets

from .serializers import ProductSerializer
from .models import Product




#viewset class for getting product data


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer
