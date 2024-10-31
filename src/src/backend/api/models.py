from django.db import models

# Create your models here.
class Books(models.Model):
       Title = models.CharField(max_length=60)
       Genre = models.CharField(max_length=60)
       Author = models.CharField(max_length=60)
       Publish_date = models.DateField()
       Number_pages = models.IntegerField()
       Book_cover = models.CharField(max_length=199)

       def __str__(self):
              return self.Title
