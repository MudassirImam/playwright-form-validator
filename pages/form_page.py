# pages/form_page.py
class FormPage:
    def __init__(self, page):
        self.page = page

    def open(self, url):
        self.page.goto(url)

    def fill_field(self, selector, value):
        self.page.fill(selector, value)

    def submit(self):
        self.page.click("button[type='submit']")

    def get_error(self, selector):
        return self.page.text_content(selector)
