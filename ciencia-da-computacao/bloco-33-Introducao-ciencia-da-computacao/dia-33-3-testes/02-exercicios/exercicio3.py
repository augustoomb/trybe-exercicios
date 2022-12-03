import re

def check_name_user():
  pass

def check_web_site():
  pass

def check_extension():
  pass

def separate_email(email):
  list_parts_email = re.split(r'[@.]', email)
  return list_parts_email
  

def email_validate(email):
  list_parts_email = separate_email(email)
  


email_validate("augusto@hotmail.com")