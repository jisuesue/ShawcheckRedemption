from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'wear'

router = DefaultRouter()
router.register('userclothes', views.UserClothesViewSet)

urlpatterns = [
    # 코디 아이템 등록/수정/삭제
    path('', include(router.urls)),
    # 내가 등록한 아이템 보기
    path('mylist/', views.mylist),
    # 코디셋 등록하기
    path('createcoordi/', views.create_coordi),
    # 내가 등록한 코디셋 보기
    path('listcoordi/', views.list_coordi),
    # 코디셋 좋아요/삭제 하기
    path('likecoordi/coordi_pk/', views.like_coordi),
    # 내가 좋아요한 리스트 가져오기
    path('likelist/', views.like_list),
    # 코디 추천
    path('recommand/', views.recommand),
    path('coordiset/test/', views.coordiset_test),
    # 이미지 전처리
    path('image/preprocess/', views.image_preprocess),
    # path('guidetour/<int:tour_pk>', views.guidetour),
]
