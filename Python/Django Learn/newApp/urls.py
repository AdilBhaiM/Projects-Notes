from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('/app/hello', views.say_hello)
]