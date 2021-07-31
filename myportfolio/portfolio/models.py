from django.db import models
# from multipleselectfield import MultiSelectField

# Create your models here.


# class Category(models.Model):
#     name=models.CharField(max_length=200)

#     def __str__(self):
#         return self.name


Category_one=(
    ("htmlandcss3", "htmlandcss3"),
    ("javascript", "javascript"),
    ("django", "django"),

)

Category_two=(
    ("htmlandcss3", "htmlandcss3"),
    ("javascript", "javascript"),
    ("django", "django"),

)

Category_three=(
    ("htmlandcss3", "htmlandcss3"),
    ("javascript", "javascript"),
    ("django", "django"),

)




class Project(models.Model):
    name=models.CharField(max_length=200)
    # category=models.ManyToManyField(Category)
    categoryone=models.CharField(max_length=200,choices=Category_one)
    categorytwo=models.CharField(max_length=200,choices=Category_two,blank=True)
    categorythree=models.CharField(max_length=200,choices=Category_three,blank=True)
    
    url=models.CharField(max_length=200)
    image=models.ImageField(upload_to='projects/')   
    
    def __str__(self):
        return self.name

  