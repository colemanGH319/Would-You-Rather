from django.db import models

# Create your models here.
class User(models.Model):
    id = models.CharField(max_length=30, primary_key=True)
    name = models.CharField(max_length=30)
    avatarURL = models.CharField(max_length=150)

class Question(models.Model):
    id = models.CharField(max_length=30, primary_key=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Answers(models.Model):
    ANSWER_OPTIONS = (('ONE', 'OptionOne'), ('TWO', 'OptionTwo'))
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.CharField(max_length=3, choices=ANSWER_OPTIONS)
