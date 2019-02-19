from quickstart.models import User, Question, Answer

def populate_users():
    new_user = User(id='mcoleman', name='Matt Coleman', avatarURL='')
    new_user.save()

def populate_questions():
    question = Question(id='newquestion', author='mcoleman',
                        option_one='Walk to work in a blizzard')
    question.save()

def populate_answer():
    user = User.objects.get(id='mcoleman')
    question = Question.objects.get(id='newquestion')
    answer = Answer(user=user, question=question, answer='ONE')
