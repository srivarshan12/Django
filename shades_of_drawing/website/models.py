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

        
class Gallery(models.Model):
    name=models.CharField(max_length=200)
    image=models.ImageField(null=True,blank=True)
    price=models.FloatField(default=500.00,blank=True)
    category=models.ManyToManyField(Category)
    portfolio=models.BooleanField(default=False)
    shop=models.BooleanField(default=False)

    def __str__(self):
        return self.name

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url=""
        return url
