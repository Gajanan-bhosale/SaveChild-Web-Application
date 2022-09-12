
from rest_framework import serializers
from . models import Details
from drf_extra_fields.fields import HybridImageField



class DetailsSerializer(serializers.ModelSerializer):
    image = HybridImageField()

    class Meta:
        model = Details
        fields = '__all__'