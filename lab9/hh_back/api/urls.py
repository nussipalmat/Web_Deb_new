from django.contrib import admin
from django.urls import path

from api.views import *

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', one_companies_detail),
    path('companies/<int:id>/vacancies', vacancies_by_company),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', one_vacancies_detail),
    path('vacancies/top_ten', top_ten_vacancies),
]