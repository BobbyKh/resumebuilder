# Generated by Django 5.1.3 on 2024-11-27 20:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_resume_achievements_alter_resume_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='achievements',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='address',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='education',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='email',
            field=models.EmailField(default=1, max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='hobbies',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='image',
            field=models.ImageField(default=1, upload_to='resume_images/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='name',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='phone',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='references',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='skills',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='template',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.resumetemplate'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='resume',
            name='work_experience',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]