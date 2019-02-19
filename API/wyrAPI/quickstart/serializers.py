from rest_framework import serializers
from .models import User, Answer

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('user', 'question', 'answer')

    def __unicode__(self):
        return '%s: %s' % (self.question, self.answer)

class UserSerializer(serializers.ModelSerializer):
    answers = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'avatarURL', 'answers')
