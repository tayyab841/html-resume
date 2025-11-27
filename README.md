# HTML to PDF Generator with SCSS & Images

A Node.js script that converts an HTML page into an **A4 PDF** while fully supporting:

- SCSS styling (compiled automatically)
- Local images
- CSS backgrounds and fonts
- A4 size formatting with margins

This is perfect for generating resumes, invoices, or any styled documents from HTML.

---

## Features

- ✅ Compile SCSS to CSS automatically
- ✅ Inject styles directly into HTML for accurate rendering
- ✅ Include local images (\`file://\`) in the PDF
- ✅ Full A4 formatting with configurable margins
- ✅ Works entirely offline

---

## Folder Structure

project/
- index.js       # Node.js script
- index.html       # HTML template
- styles.scss      # SCSS file
- tayyab.jpg       # Example image
- output.pdf       # Generated PDF

---

## Installation

1. Clone this repo:

> git clone <your-repo-url>

> cd project

2. Install dependencies:

> npm install

---

## Usage

1. Place your HTML, SCSS, and images in the project folder.
2. Update \`index.html\` with your content.  
   > **Note:** Do not include <link> tags for CSS — the SCSS is injected automatically.
3. Run the script:

> node index.js

4. The PDF will be generated as \`output.pdf\` in the same folder.

## Notes

- The script uses \`page.goto("file://")\` to ensure **local images** are loaded.
- The compiled SCSS is injected into the page via \`addStyleTag()\` for accurate styling in PDF.
- Use \`--allow-file-access-from-files\` argument in Puppeteer to allow local file access.

---

## License

MIT License
