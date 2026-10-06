import time
from playwright.sync_api import Page, expect, sync_playwright

def test_homepage_donate(page: Page):
    page.goto("http://localhost:3000/#donate")
    page.wait_for_selector("#donate")

    time.sleep(2)

    donate_section = page.locator("#donate")
    donate_section.scroll_into_view_if_needed()

    eth_conversion = page.locator("#ethConversion")
    expect(eth_conversion).to_be_visible()

    page.screenshot(path="/tmp/donate_homepage.png")
    print("Screenshot captured successfully")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_homepage_donate(page)
        finally:
            browser.close()
