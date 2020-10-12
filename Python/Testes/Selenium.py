from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import random

def opengoogle():
    driver = webdriver.Firefox('C:\Users\Administrador\Documents\Coding\geckodriver-v0.27.0-win64\geckodriver.exe')
    driver.get(executable_path='http://google.com.br')

opengoogle()