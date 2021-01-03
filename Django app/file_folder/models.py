from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class File_Folder(models.Model):

    name = models.CharField(max_length=100, blank=True, default='')
    folder = models.BooleanField(default=False)
    parent_folder = models.IntegerField(null=True)
    parent_folder_name = models.CharField(
        max_length=500, blank=True, default='')
    file = models.FileField(null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    # updated_date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        User, related_name='user', on_delete=models.CASCADE)

    def __str__(self):
        if self.parent_folder_name is not None:
            return self.parent_folder_name+"/" + self.name
        else:
            return self.name
