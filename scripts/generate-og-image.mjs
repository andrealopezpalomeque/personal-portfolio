import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function generateOgImage() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.setViewportSize({ width: 1200, height: 630 })

  const htmlPath = resolve(__dirname, 'og-image.html')
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' })

  // Wait for fonts to load
  await page.waitForTimeout(1500)

  const outputPath = resolve(__dirname, '..', 'public', 'og-image.png')
  await page.screenshot({ path: outputPath, type: 'png' })

  await browser.close()
  console.log(`OG image generated: ${outputPath}`)
}

generateOgImage().catch(console.error)
