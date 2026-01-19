# utils/browser_factory.py
from playwright.sync_api import sync_playwright

def get_page():
    pw = sync_playwright().start()
    browser = pw.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    return page, browser, pw
