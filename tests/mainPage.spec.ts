import { test, expect, type Page } from '@playwright/test';

test.describe('Verifying elements in the main page',() => {
    test.beforeEach('Page being verified', async({page}) => {
        await page.goto('https://www.earn2trade.com');
    });
    test('Page has title', async({ page }) => {
        await expect(page).toHaveTitle(/Earn2Trade/);
    });
    test('Products menu exists', async({ page }) => {
        await expect(page.locator('.dropdown-list-header').first()).toBeVisible();
    });
    test('Products menu contains Trader Career Path', async({page}) => {
        await page.locator('.dropdown-list-header').first().hover();
        await expect(page.getByRole('link', { name: 'Trader Career Path®', exact: true })).toBeVisible();
    });
});