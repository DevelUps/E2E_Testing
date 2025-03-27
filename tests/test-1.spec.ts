import {test, Browser, Page, expect} from '@playwright/test';
(async () => {
  let browser: Browser;
  let page: Page;
  
  test.describe('Navegacion en www.Freerangetesters.com', () => {

    const secciones = [
      { name: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
      { name: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy' },
      { name: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
      { name: 'Blog', url: '/blog', tituloEsperado: 'Free Range Testers' },
      { name: 'Mentorías', url: '/mentoria-1-1-con-pato', tituloEsperado: 'Mentoría personalizada de avance de carrera para testers de software' },
      { name: 'Academia', url: '/academia', tituloEsperado: 'Academia' },
      { name: 'Acceder', url: '/login', tituloEsperado: 'Acceder a Free Range Testers' },  

      //agregar mas secciones si es necesario
    ];

    for (const seccion of secciones) {

      test(`Validacion de links del encabezado redirigen correctamente ${seccion.name}`, async ({ page }) => {
        await test.step(`Estando yo en la pagina principal www.Freerangetesters.com `, async () => {
          await page.goto('https://www.freerangetesters.com');
          await expect(page).toHaveTitle("Free Range Testers");
        });


        await test.step(`Cuando yo hago click en el link de "${seccion.name}"`, async () => {
          await page.locator('#page_header').getByRole('link', { name: seccion.name, exact: true }).click();
          await page.waitForURL(`**${seccion.url}**`);
        })


        await test.step(`Soy redirijido a la seccion de titulo "${seccion.tituloEsperado}"`, async () => {
          await expect(page).toHaveTitle(seccion.tituloEsperado);
          page.close();
        })
      });
    }
  });
})();      
