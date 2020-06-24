#coding: utf-8 -*-

def media():
    robson = True
    while robson:
        try:
            n1 = int(input("1° nota: "))
            n2 = int(input("2° nota: "))
        except ValueError:
            print("somente números, por favor!")
            continue
        break
    if n1 + n2 /2 >= int(6):
        print('Aprovado.')
    elif n1 + n2 /2 < int(6):
        print("Reprovado.")
        #Não era necessário o "int(6)", eu coloquei pra testar um negócio e esqueci de tirar...
media()