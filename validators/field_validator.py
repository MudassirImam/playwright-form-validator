# validators/field_validator.py
class FieldValidator:

    def __init__(self, page):
        self.page = page

    def validate_required(self, field, error_selector):
        self.page.fill(field, "")
        self.page.blur(field)
        return self.page.text_content(error_selector)

    def validate_min_length(self, field, error_selector, length):
        self.page.fill(field, "a" * (length - 1))
        self.page.blur(field)
        return self.page.text_content(error_selector)
