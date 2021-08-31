from pynput.keyboard import Listener, key

def on_press(key):
    print("{O} pressionado")

def on_release(key):
    pass

with Listerner(on_press = on_press, on_releasse = on_release) as Listener:
    Listener.join()