from rest_framework import serializers

from .models import Order

#Serialization of Order data
class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('user')
      
