# Generated by Django 2.1.3 on 2018-12-06 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='premium',
            field=models.DateTimeField(default='1970-01-01 00:00:00'),
        ),
    ]
