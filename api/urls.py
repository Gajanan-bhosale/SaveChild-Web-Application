from django.urls import path
from api import views

urlpatterns = [
    path('info/', views.DetailsList.as_view()),
]