# Generated by Django 5.1.4 on 2025-01-01 05:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_branding'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='branding',
            name='cta_text',
        ),
        migrations.RemoveField(
            model_name='branding',
            name='description',
        ),
        migrations.RemoveField(
            model_name='branding',
            name='discount_percentage',
        ),
        migrations.RemoveField(
            model_name='branding',
            name='image',
        ),
        migrations.RemoveField(
            model_name='branding',
            name='title',
        ),
    ]