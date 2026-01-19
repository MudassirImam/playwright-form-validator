# tests/test_form_validation.py
from utils.browser_factory import get_page
from pages.form_page import FormPage
from validators.field_validator import FieldValidator

def test_username_required():
    page, browser, pw = get_page()
    form = FormPage(page)
    validator = FieldValidator(page)

    form.open("https://docs.google.com/forms/d/1ZTmPac7DOYxZJD1qxDH9CJsaUD-IvMwmSOKg28Mq7K8/edit")

    error = validator.validate_required(
        "#username",
        "#username-error"
    )

    assert "required" in error.lower()

    browser.close()
    pw.stop()
