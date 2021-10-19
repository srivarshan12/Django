from django.db import models
from django.db.models.fields import CharField

# Create your models here.

class Newsletter(models.Model):
    name=models.EmailField()

    def __str__(self):
        return self.name


class Category(models.Model):
    name=models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Shop(models.Model):
    name=models.CharField(max_length=200)
    description=models.CharField(max_length=2000)
    image=models.ImageField(null=True,blank=True)   
    price=models.FloatField()
    category=models.ManyToManyField(Category)
    
    def __str__(self):
        return self.name

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url=""
        return url

        
# class cart(models.Model):
    # user=
    # gallery id= checkbox choice of gallery pk

