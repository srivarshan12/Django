# Generated by Django 3.2.8 on 2021-11-02 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0019_auto_20211102_1422'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='price',
            field=models.FloatField(blank=True, default=500.0),
        ),
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
