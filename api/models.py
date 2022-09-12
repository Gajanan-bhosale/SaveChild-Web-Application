from django.db import models
from django.utils.translation import gettext_lazy as _
# from django.contrib.gis.db import models



def upload_to(instance, filename):
    return 'posts/{filename}'.format(filename=filename)


class Details(models.Model):
    image = models.ImageField(_("Image"), upload_to=upload_to)

    GENDER = [
        ('MALE', 'MALE'),
        ('FEMALE', 'FEMALE'),
    ]
    gender = models.CharField(
        max_length=10,
        choices=GENDER,
        default=None,
    )

    AGE = [
        ('< 4 Years', '< 4 Years'),
        ('4 to 9 Years', '4 to 9 Years'),
        ('10 to 14 Years', '10 to 14 Years'),
        ('> 14 Years', '> 14 Years'),
    ]
    age = models.CharField(
        max_length=100,
        choices=AGE,
        default=None,
    )
    location = models.CharField(max_length=200, default='NO LOCATION')

class Meta:
    model = Details
    fields = ('id', 'gender', 'age', 'location')
