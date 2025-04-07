from django.shortcuts import render
from django.http.response import  HttpResponse, JsonResponse
from django.http.request import HttpRequest

from api.models import Vacancy, Company

def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def one_companies_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(company.to_json())
def vacancies_by_company(request,id):
    vacancies = Vacancy.objects.all()
    vacancies_by_company_json = []
    
    for vacancy in vacancies:
        if vacancy.company.id == id:
            vacancies_by_company_json.append(vacancy.to_json())
    
    return JsonResponse(vacancies_by_company_json, safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def one_vacancies_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Exception as e:
        return  JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]  # Sort by salary DESC and take first 10 #try 2 for a test
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

