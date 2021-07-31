from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.db import models
from .models import *

# Create your views here.

def index(request):
    project=Project.objects.all()
    context={"project":project}

    if request.method=="POST":

        fromemail=request.POST['senderemail']
        name=request.POST['sendername']
        subject=request.POST['sendersubject']
        message=request.POST['sendermessage']

        send_mail(
            name + ' messaged you',  #subject
            '<bold>Subject: </bold>'+subject+"\n"
            +'Email id :'+fromemail+"\n"
            +message,
            fromemail,
            ['srivarshan1206@gmail.com'],
        )
        return redirect('index')
    else:
        return render(request,'index.html',context)
    
