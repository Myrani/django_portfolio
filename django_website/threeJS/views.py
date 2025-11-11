from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request=request,template_name="threeJS/base_page.html",context=None)
