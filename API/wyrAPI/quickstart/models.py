from django.db import models


# Create your models here.
class User(models.Model):
    id = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=30)
    avatarURL = models.CharField(max_length=100)


class Answer(models.Model):
    user = models.ForeignKey(User, related_name='answers', on_delete=models.CASCADE)
    question = models.CharField(max_length=30)
    answer = models.CharField(max_length=10)
