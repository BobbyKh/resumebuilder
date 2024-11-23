# The line `serializer_class = AppointmentTypeSerializer` in the `AppointmentType` class is
# defining the serializer class to be used for serializing and deserializing instances of the
# `AppointmentType` model. This means that when handling requests related to `AppointmentType`,
# the `AppointmentTypeSerializer` will be used to convert the model instances to JSON data for
# responses and to parse incoming JSON data into model instances for processing. This helps in
# ensuring proper data representation and validation in the API views related to
# `AppointmentType`.
from django.test import TestCase

# Create your tests here.
