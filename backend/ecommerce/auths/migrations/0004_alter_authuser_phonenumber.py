# Generated by Django 5.0.6 on 2024-07-01 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auths', '0003_alter_buyer_github_id_alter_buyer_google_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='authuser',
            name='phoneNumber',
            field=models.CharField(blank=True, help_text='Email. If your account is of a business type i.e. seller, please drop your business phone number instead', max_length=15, unique=True, verbose_name='Phone number'),
        ),
    ]
