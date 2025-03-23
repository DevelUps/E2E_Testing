import {test, Browser, Page, expect} from '@playwright/test';
(async () => {
  let browser: Browser;
  let page: Page;
  
  test.describe('Navegacion en www.Freerangetesters.com', () => {

    const secciones = [
      { name: 'Cursos', url: '/cursos', titulo: 'Cursos' },
      { name: 'Udemy', url: '/udemy', titulo: 'Udemy' },
      { name: 'Recursos', url: '/recursos', titulo: 'Recursos' },
      //agregar mas secciones si es necesario
    ];

    for (const seccion of secciones) {

      test(`Los links principales se redirigen correctamente a ${seccion.name}`, async ({ page }) => {
        await test.step(`Estando yo en la pagina principal www.Freerangetesters.com `, async () => {
          await page.goto('https://www.freerangetesters.com');
          await expect(page).toHaveTitle("Free Range Testers");
        });

        await test.step(`Cuando yo hago click en el link de "${seccion.name}"`, async () => {
          await page.locator('#page_header').getByRole('link', { name: seccion.name, exact: true }).click();
          await page.waitForURL(`**${seccion.url}**`);
        })

        await test.step(`Soy redirijido a la seccion de titulo "${seccion.titulo}"`, async () => {
          await expect(page).toHaveTitle(seccion.titulo);
        })
      });
    }
  });
})();      
