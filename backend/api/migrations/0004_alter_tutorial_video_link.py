# Generated by Django 5.1.4 on 2024-12-24 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_tutorial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tutorial',
            name='video_link',
            field=models.TextField(),
        ),
    ]