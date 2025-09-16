// @ts-check
import { test, expect } from '@playwright/test';

test('Indo e printando tela londrina', async ({ page }) => {
  await page.goto('https://portal.londrina.pr.gov.br/');
  await page.screenshot({ path: 'screenshots/telainicial.png' })
});

test('clicando nas licitações e entrando no portal', async({ page }) => {
  await page.goto('https://portal.londrina.pr.gov.br/');
  await page.getByRole('link', { name: "Licitações, Contratos, Convênios, Atas... " }). click();
  await page.screenshot({ path: 'screenshots/clicandoLicitacao.png' })
  await page.locator('#sppb-addon-1669140503596').click();
})