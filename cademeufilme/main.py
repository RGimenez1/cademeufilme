from justwatch import JustWatch
import requests

just_watch = JustWatch()

nomedofilme = input("Entrar com o nome do filme: ")

id_filme = just_watch.search_title_id(query=nomedofilme)
print(id_filme[nomedofilme])

chamadaHttp = 'https://apis.justwatch.com/content/titles/movie/'+str(id_filme[nomedofilme])+'/locale/pt_BR?language=pt'

print(chamadaHttp)

chamadaApi = requests.get(chamadaHttp)

print(chamadaApi.text)

#CAMINHO PRO VALOR DA NOTA DO IMDB : ['scoring'][1]['value']