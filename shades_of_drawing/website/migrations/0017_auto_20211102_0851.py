# Generated by Django 3.2.8 on 2021-11-02 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0016_auto_20211102_0850'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='category',
            field=models.ManyToManyField(to='website.Category'),
        ),
        migrations.AlterField(
            model_name='shop',
            name='category',
            field=models.ManyToManyField(to='website.Category'),
        ),
    ]
