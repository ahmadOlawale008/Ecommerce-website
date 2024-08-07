# Generated by Django 5.0.6 on 2024-06-30 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auths', '0002_businessaddress_alter_businessinfo_unique_together_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='github_id',
            field=models.CharField(max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='buyer',
            name='google_id',
            field=models.CharField(max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='buyer',
            name='twitter_id',
            field=models.CharField(max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='seller',
            name='github_id',
            field=models.CharField(max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='seller',
            name='google_id',
            field=models.CharField(max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='seller',
            name='twitter_id',
            field=models.CharField(max_length=255, null=True, unique=True),
        ),
    ]
