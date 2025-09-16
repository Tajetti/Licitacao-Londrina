// @ts-check
import { test, expect } from '@playwright/test';

test('Indo e printando tela londrina', async ({ page }) => {
  await page.goto('https://www1.londrina.pr.gov.br/sistemas/licita/index.php');
  await page.getByRole('link', {name: 'Abertas'}).click();
  await page.getByRole('button', {name: 'formato XLS'}).click();
  await page.screenshot({ path: 'screenshot/teste.png' })

  const downloadXLS = page.waitForEvent('download')
  await page.getByText('formato XLS').click();
  const download = await downloadXLS
  await download.saveAs('licitacao/'+download.suggestedFilename()); 
});