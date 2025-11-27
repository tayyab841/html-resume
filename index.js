const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const sass = require("sass");

async function convertHTMLtoPDF() {
  // 1️⃣ Compile SCSS → CSS
  const scssPath = path.join(__dirname, "styles.scss");
  const compiled = sass.compile(scssPath);

  // 2️⃣ Launch Puppeteer
  const browser = await puppeteer.launch({
    args: ["--allow-file-access-from-files"]
  });
  const page = await browser.newPage();

  // 3️⃣ Load HTML via file:// so relative images work
  const htmlPath = path.join(__dirname, "index.html");
  const htmlUrl = "file://" + htmlPath.replace(/\\/g, "/");
  await page.goto(htmlUrl, { waitUntil: "networkidle0" });

  // 4️⃣ Inject compiled CSS into the page
  await page.addStyleTag({ content: compiled.css });

  // 5️⃣ Generate PDF
  await page.pdf({
    path: "Tayyab_Nadeem.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "15mm", bottom: "15mm", left: "15mm", right: "15mm" }
  });

  await browser.close();
  console.log("PDF created!");
}

convertHTMLtoPDF();
