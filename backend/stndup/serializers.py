from rest_framework import serializers
from .models import Stndup


class StndupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stndup
        fields = ('id', 'title', 'description', 'completed')
