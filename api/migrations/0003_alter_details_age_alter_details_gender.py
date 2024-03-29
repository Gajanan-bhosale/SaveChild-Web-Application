# Generated by Django 4.0.3 on 2022-03-24 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_details_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='details',
            name='age',
            field=models.CharField(choices=[('< 4 Years', '< 4 Years'), ('4 to 9 Years', '4 to 9 Years'), ('10 to 14 Years', '10 to 14 Years'), ('> 14 Years', '> 14 Years')], default='op3', max_length=100),
        ),
        migrations.AlterField(
            model_name='details',
            name='gender',
            field=models.CharField(choices=[('MALE', 'MALE'), ('FEMALE', 'FEMALE')], default=None, max_length=10),
        ),
    ]
