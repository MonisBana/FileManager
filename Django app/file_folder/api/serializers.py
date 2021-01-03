from rest_framework import serializers
from file_folder.models import File_Folder
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class FileFolderSerializer(serializers.ModelSerializer):

    # user = UserSerializer()
    user = UserSerializer(read_only=True)
    parent_folder_name = serializers.StringRelatedField(read_only=True)
    # owner = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = File_Folder
        fields = "__all__"
