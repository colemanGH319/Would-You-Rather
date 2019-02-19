from rest_framework.decorators import api_view
from rest_framework.response import Response
from quickstart.serializers import UserSerializer, AnswerSerializer


# Create your views here.

@api_view(['GET'])
def user_list(request):
    """
    List all users and their information
    """

    if request.method == 'GET':
        serializer = UserSerializer(data={'id':'sarahedo',
                                        'name':'Sarah Edo',
                                        'avatarURL':'',
                                        'answers':[{'question':'abcdef',
                                                    'answer':'ONE'}]
                                    })
        serializer.is_valid()
        return Response(serializer.data)

@api_view(['GET'])
def answer_list(request):

    if request.method == 'GET':
        serializer = AnswerSerializer(data={'question':'abcdef','answer':'ONE'})
        serializer.is_valid()
        return Response(serializer.data)
