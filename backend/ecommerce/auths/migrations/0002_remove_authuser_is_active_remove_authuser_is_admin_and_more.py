# Generated by Django 5.0.6 on 2024-06-04 22:12

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auths', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='authuser',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='authuser',
            name='is_admin',
        ),
        migrations.RemoveField(
            model_name='authuser',
            name='is_staff',
        ),
        migrations.AlterField(
            model_name='authuser',
            name='last_name',
            field=models.CharField(max_length=30, validators=[django.core.validators.MinLengthValidator(2)], verbose_name='Last name'),
        ),
    ]