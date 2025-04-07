from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    city = models.CharField(max_length=100)
    address = models.TextField(max_length=300)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city' : self.city,
            'address' : self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    company = models.ForeignKey(Company, default=None, on_delete=models.CASCADE)
    salary = models.FloatField(default=0)
    description = models.TextField(max_length=300)
    def __str__(self):
        return (self.name + f" ({self.company.name})")

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'company': {
                'id': self.company.id,
                'name': self.company.name
            },
            'salary': self.salary,
            'description': self.description
        }