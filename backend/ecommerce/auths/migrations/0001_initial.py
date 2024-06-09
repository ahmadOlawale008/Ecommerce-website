# Generated by Django 5.0.6 on 2024-06-04 21:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('first_name', models.CharField(max_length=30, validators=[django.core.validators.MinLengthValidator(2)], verbose_name='First name')),
                ('last_name', models.CharField(max_length=30, validators=[django.core.validators.MinLengthValidator(2)], verbose_name='First name')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phoneNumber', models.CharField(max_length=15, unique=True, verbose_name='Phone number')),
                ('user_type', models.CharField(choices=[('buyer', 'BUYER'), ('seller', 'SELLER'), ('both', 'BOTH')], default='buyer', max_length=6)),
                ('is_active', models.BooleanField(default=False)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Users',
                'unique_together': {('first_name', 'last_name')},
            },
        ),
    ]