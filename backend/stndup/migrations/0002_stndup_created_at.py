# Generated by Django 3.2.9 on 2022-01-04 03:47

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('stndup', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='stndup',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2022, 1, 4, 3, 47, 51, 543415, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
