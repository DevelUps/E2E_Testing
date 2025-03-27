import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;
    let texto: string = 'Buscando Bichitos en este campo de texto 🐞';

    const url: string = 'https://thefreerangetester.github.io/sandbox-automation-testing/';

    test.describe('Acciones en el sandbox automation', () => {

        test('Click en Botón para generar un ID', async ({ page }) => {
            await test.step('Página Principal', async () => {
                await page.goto(url);
                await expect(page).toHaveTitle("Automation Sandbox");
            });

            await test.step('Cuando yo hago click en el botón de "Click Me"', async () => {
                await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
            });
        });

        test('Voy a llenar el texto en un campo de texto', async ({ page }) => {
            await test.step('Página Principal', async () => {
                await page.goto(url);
            });

            await test.step('Puedo llenar el campo de texto con un aburrido texto', async () => {
                await page.getByRole('textbox').fill(texto);
            });
        });

    });

})();
