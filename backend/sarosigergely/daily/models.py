from django.db import models

# Create your models here.
class CheckboxState(models.Model):
    state = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)
    is_checked = models.BooleanField(default=False)

    def __str__(self):
        return str(self.date) + ": " + str(self.state)
    

class ListItem(models.Model):
    name = models.CharField(max_length=255)
    is_removed = models.BooleanField(default=False)  # Jelzi, hogy az elem "eltüntetve" van-e
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
