from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Your Instagram credentials
username = "Monkeyscrackers"
password = "jj123456789"

# The username of the user whose DMs you want to retrieve
other_user = "Jonlic"

# Initialize the WebDriver
options = webdriver.EdgeOptions()
driver = webdriver.Edge()

    # Open Instagram
driver.get("https://www.instagram.com/")


time.sleep(5)


# ...

# Wait for the username input field to be clickable
username_input = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.NAME, "username")))
username_input.send_keys(username)

# Wait for the password input field to be clickable
password_input = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.NAME, "password")))
password_input.send_keys(password)

# Wait for the login button to be clickable
login_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//button[@type='submit']")))
login_button.click()

password_input = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.NAME, "password")))
# Open the DMs page
driver.get("https://www.instagram.com/direct/inbox/")

time.sleep(5)
driver.quit()
