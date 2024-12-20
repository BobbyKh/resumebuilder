# Generated by Django 5.1.4 on 2024-12-10 09:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('status', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='about_us/')),
            ],
        ),
        migrations.CreateModel(
            name='AppointmentType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('status', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='DocumentCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('icon', models.ImageField(blank=True, null=True, upload_to='')),
                ('status', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Document Category',
                'verbose_name_plural': 'Document Categories',
            },
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('years_of_experience', models.PositiveIntegerField(default=0, help_text='Enter the number of years of experience')),
                ('is_student', models.BooleanField(default=False, help_text='Indicate whether the user is a student.')),
                ('decription', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=255)),
                ('answer', models.TextField()),
                ('status', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='FooterSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=200)),
                ('name', models.CharField(max_length=100)),
                ('link', models.URLField()),
                ('status', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='HeroSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='hero_section/')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('button_text', models.CharField(max_length=100, null=True)),
                ('status', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='organizations/')),
                ('logo', models.ImageField(upload_to='organizations/')),
                ('status', models.BooleanField(default=True)),
                ('slogans', models.TextField()),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('address', models.TextField()),
                ('facebook', models.CharField(max_length=100)),
                ('twitter', models.CharField(max_length=100)),
                ('instagram', models.CharField(max_length=100)),
                ('linkedin', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Pricing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('description', models.TextField()),
                ('features', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(null=True, upload_to='testimonials/')),
                ('status', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('message', models.TextField()),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('appointment_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.appointmenttype')),
            ],
        ),
        migrations.CreateModel(
            name='Template',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='resume_templates/')),
                ('name', models.CharField(max_length=100)),
                ('template', models.TextField()),
                ('html', models.TextField()),
                ('status', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('doc_cat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.documentcategory')),
            ],
        ),
        migrations.CreateModel(
            name='DocumentField',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.CharField(blank=True, max_length=100, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='resume_images/')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('certification', models.JSONField(blank=True, default=list, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('linkedin', models.CharField(blank=True, max_length=100, null=True)),
                ('github', models.CharField(blank=True, max_length=100, null=True)),
                ('website', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.IntegerField(blank=True, null=True)),
                ('project', models.JSONField(blank=True, default=list, null=True)),
                ('address', models.JSONField(blank=True, null=True)),
                ('skill', models.JSONField(blank=True, default=list, null=True)),
                ('education', models.JSONField(blank=True, default=list, null=True)),
                ('experience', models.JSONField(blank=True, default=list, null=True)),
                ('achievement', models.JSONField(blank=True, default=list, null=True)),
                ('hobbies', models.JSONField(blank=True, default=list, null=True)),
                ('language', models.JSONField(blank=True, default=list, null=True)),
                ('reference', models.TextField(blank=True, null=True)),
                ('extra', models.TextField(blank=True, null=True)),
                ('watermark', models.ImageField(blank=True, null=True, upload_to='resume_images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('template', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.template')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
    ]
