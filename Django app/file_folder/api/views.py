from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from file_folder.api.serializers import FileFolderSerializer
from rest_framework.generics import get_object_or_404
from file_folder.models import File_Folder
from rest_framework.exceptions import ValidationError
from django.db.models import Q


class FileFolderViewSet(viewsets.ModelViewSet):

    serializer_class = FileFolderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = File_Folder.objects.filter(user=self.request.user)
        print(queryset)
        return queryset

    def perform_create(self, serializer):
        serializer_parent_folder = serializer.validated_data['parent_folder']
        if not(serializer_parent_folder is None):
            if serializer_parent_folder > 0:
                fileorfolder = File_Folder.objects.filter(
                    Q(user=self.request.user)
                    &
                    Q(id=serializer_parent_folder)
                    &
                    Q(folder=True)
                )
            else:
                raise ValidationError("Please input proper parent folder!!!")
        # print(fileorfolder)
        # print(serializer.validated_data['parent_folder'])
            if not fileorfolder:
                raise ValidationError("ParentFolder not found!!!")

        # print(serializer.validated_data)
            parent_folder_name = fileorfolder[0].name
            serializer.save(user=self.request.user,
                            parent_folder_name=parent_folder_name)
        else:
            serializer.save(user=self.request.user)
