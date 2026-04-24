import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function generateResumePdf() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  const htmlPath = resolve(__dirname, 'resume.html')
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  const outputPath = resolve(
    __dirname,
    '..',
    'public',
    'resume',
    'Andrea_Lopez_Palomeque_Resume.pdf'
  )

  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.34in', right: '0.55in', bottom: '0.34in', left: '0.55in' },
  })

  await browser.close()
  console.log(`Resume PDF generated: ${outputPath}`)
}

generateResumePdf().catch((err) => {
  console.error(err)
  process.exit(1)
})
