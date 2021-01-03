from django.urls import path, include
from rest_framework.routers import DefaultRouter
from file_folder.api.views import FileFolderViewSet

router = DefaultRouter()
router.register(r'file_folder', FileFolderViewSet, 'file_folder')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = [
    path("", include(router.urls)),
]
