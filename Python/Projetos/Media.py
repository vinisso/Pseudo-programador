#coding: utf-8 -*-

print(
    "Nesse programa você irá recebe a média de duas notas dadas pelo usuário."
)

def media():
    print('Lembre-se que a média é dada pela soma dos valores dividido pela quantidade de valores recebidos...')
    while True:
        try:
            nota1 = int(input("Primeira nota: "))
            nota2 = int(input("Segunda nota: "))
            total = (nota1 + nota2) / 2
        except ValueError:
            print("Apenas números, por favor!")
            continue
        break

    if total < 6:
        print("Reprovado!")
    else: 
        print("Aprovado!")
 

media()