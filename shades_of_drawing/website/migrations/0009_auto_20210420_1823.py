# Generated by Django 3.1.3 on 2021-04-20 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0008_auto_20210420_1708'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='category',
            field=models.ManyToManyField(to='website.Category'),
        ),
    ]
