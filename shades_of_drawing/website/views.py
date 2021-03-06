from django.http.response import HttpResponse
from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.db import models
from .models import *
import requests
import ctypes  # An included library with Python install.   

# Create your views here.
def index(request):
    gallery=Gallery.objects.filter(portfolio=True)        
    context={"gallery":gallery}    
           
    if request.method=="POST":
            email=request.POST.get('newsletteremail')
            print(email)
            if Newsletter.objects.filter(name=email).exists():
                    print(email+" already exists")  
                    return render(request,'index.html',context)
            else:
                try:
                    if requests.get("https://isitarealemail.com/api/email/validate", params = {'email': email}).json()['status']=="valid":
                        new = Newsletter(name=email)
                        new.save()
                        print(email+"added successfully")  
                        return render(request,'index.html',context)
                    else:
                        print("invalid")    
                        return None
                except ValueError:
                    print("Invalid exception")

    return render(request,'index.html',context)


def gallery(request):
    gallery=Gallery.objects.all()
    context={"gallery":gallery}    
    return render(request,'gallery.html',context)

def aboutme(request):
    return render(request,'aboutme.html',{})

def contact(request):
    if request.method=="POST":
        if request.POST.get('name') and request.POST.get('email') and request.POST.get('subject') and request.POST.get('message'):
            print("send button clicked")
            sendername=request.POST['name']
            senderemail=request.POST['email']
            sendersubject=request.POST['subject']
            sendermessage=request.POST['message']
            if requests.get("https://isitarealemail.com/api/email/validate", params = {'email': senderemail}).json()['status']=="valid":
                print("valid email")
                send_mail(
                    'Message from '+sendername ,
                    'Subject: '+sendersubject + "\n" +'Email: '+ senderemail +"\n" +sendermessage,
                    senderemail,
                    ['srivarshan1206@gmail.com'],
                )
                print("Email sent")
                return render(request,'contact.html',{})
            else:
                print("Invalid email or email unknown")

        else:
            email=request.POST.get('newsletteremail')
            print(email)
            if requests.get("https://isitarealemail.com/api/email/validate", params = {'email': email}).json()['status']=="valid":
                if Newsletter.objects.filter(name=email).exists():
                    print(email+" already exists")  
                    return render(request,'contact.html',{})

                else:
                    new = Newsletter(name=email)
                    new.save()
                    print(email+" added successfully")  
                    return render(request,'contact.html',{})
            else:
                print("Invalid email ")

    else:
        return render(request,'contact.html',{})
            
    



def service(request):
    return render(request,'service.html',{})

def shop(request):
    gallery=Gallery.objects.filter(shop=True)        
    context={"gallery":gallery}    
    return render(request,'shop.html',context)
    
def cart(request):
    return render(request,'cart.html',{})

def checkout(request):
    return render(request,'checkout.html',{})
