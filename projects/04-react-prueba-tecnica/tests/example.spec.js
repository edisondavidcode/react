// @ts-check
import { test, expect } from '@playwright/test';

const CAT_PREFIX_IMAGE_URL = "https://cataas.com"
const HOST = "http://localhost:5173"

test('app shows random cat facts', async ({ page }) => {
  await page.goto(HOST)
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent).toBeTruthy()
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
});
