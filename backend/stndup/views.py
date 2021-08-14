from django.shortcuts import render
from rest_framework import viewsets
from .serializers import StndupSerializer
from .models import Stndup


class StndupView(viewsets.ModelViewSet):
    serializer_class = StndupSerializer
    queryset = Stndup.objects.all()
