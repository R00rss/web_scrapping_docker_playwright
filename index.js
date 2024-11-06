const { chromium } = require('@playwright/test');

(async () => {
  // Lanzar el navegador
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navegar a la URL de localhost
  await page.goto('http://localhost:5500');

  // Seleccionar todas las etiquetas <tr> dentro de <tbody>
  const rows = await page.$$('tbody tr');

  // Imprimir la cantidad de elementos <tr> encontrados
  console.log('Cantidad de filas <tr> dentro de <tbody>:', rows.length);

  // Cerrar el navegador
  await browser.close();
})();
