import { test, Browser, Page, expect } from '@playwright/test';

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
                await page.getByRole('textbox').fill(texto);// puedes usar type pero no simula la escritura
            });
            
        });

        test('Voy a recorrer a lista de checkboxes', async ({ page }) => {
            await test.step('Página Principal', async () => {
                await page.goto(url);
            });
        
            await test.step('Seleccionar todos los checkboxes', async () => {
                const checkboxes = await page.getByRole('checkbox').all(); // Obtener todos los checkboxes
        
                for (const checkbox of checkboxes) {
                    await checkbox.check(); // Marcar cada checkbox
                }
            });
        
            await test.step('Deseleccionar todos los checkboxes en orden inverso', async () => {
                const checkboxes = await page.getByRole('checkbox').all();
        
                for (let i = checkboxes.length - 1; i >= 0; i--) {
                    await checkboxes[i].uncheck(); // Desmarcar cada checkbox en orden inverso
                }
            });
        });
        test('Seleccion de RadioButtton', async ({ page }) => {
            await test.step('Página Principal', async () => {
                await page.goto(url);
            });

            await test.step('Puedo seleccionar un RadioButton', async () => {
                await page.getByRole('radio', { name: 'Si' }).check();
                await page.getByRole('radio', { name: 'No' }).check();
                
            });
            
        });
        test('Seleccion de Dropdown', async ({ page }) => {
            await test.step('Página Principal', async () => {
                await page.goto(url);
            });

            await test.step('Puedo seleccionar un deporte', async () => {
                await page.getByLabel('Dropdown').selectOption('Fútbol');
                await page.getByLabel('Dropdown').selectOption('Tennis');
                await page.getByLabel('Dropdown').selectOption('Basketball');

                
                await test.step('Se envia la eleccion del deporte', async () => {
                    await page.getByRole('button', { name: 'Enviar' }).click();
                })    
                
            });

            await test.step('Puedo Seleccionar un dia de semana', async () => {
                await page.getByRole('button', { name: 'Día de la semana' }).click();
                await page.getByRole('link', { name: 'Lunes' }).click(); 
                })    
                
            });

        });
    

