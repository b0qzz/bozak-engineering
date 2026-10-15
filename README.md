# Bozak Engineering Limited website

Static HTML, CSS and JavaScript website. There is no build step or package installation.

## Run locally
Open `index.html` in a browser, or serve the project folder with the VS Code Live Server extension.

## Current pages
- `index.html`: home
- `about.html`: company information
- `services.html`: solutions
- `products.html`: searchable, filterable product catalogue
- `industries.html`: industries served
- `contact.html`: contact details and order form

## Project files
- `css/style.css` and `css/responsive.css`: site styling and responsive layouts
- `js/main.js`: shared page interactions, including the mobile menu
- `js/products.js`: product data and catalogue rendering, search and category filtering
- `js/contact.js`: order form validation and email/WhatsApp handoff
- `assets/images/`, `assets/icons/` and `assets/documents/`: site media and company documents

## Common updates
- **Products**: edit the `PRODUCTS` array in `js/products.js`.
- **Colors**: edit the CSS custom properties near the top of `css/style.css`.
- **Contact details**: update the relevant phone numbers, email address and WhatsApp links across the HTML and JavaScript files.
- **Brand mark**: the current logo is inline SVG in the page headers and footers.
- **Company documents**: PDFs are stored in `assets/documents/`. They are not currently linked from a website page.

## Order form behavior
The form validates the visitor's details, then prepares a message in their email app or opens WhatsApp. It does not submit to a server. To receive submissions directly, connect a form service or backend and update `js/contact.js`.

## Before launch
Verify company details, product descriptions, contact information and any claims about accreditations or certifications. Confirm the hosting and domain setup, and add a privacy policy and any required search-engine files such as `sitemap.xml` and `robots.txt`.

## Deploy
Upload the project files to a static host such as Netlify, Cloudflare Pages, GitHub Pages or cPanel hosting.
