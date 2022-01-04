from django.db import models


class Stndup(models.Model):
    title = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
