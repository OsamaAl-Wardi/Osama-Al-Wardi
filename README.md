# Osama Al-Wardi — personal website

A static homepage for security research, PhD applications, and cybersecurity roles. Content is based on the supplied curriculum vitae; the publication award is attributed to the ICGT 2024 paper, and KanAxe is described as a research-transfer project and funding application, not an awarded grant.

## Preview locally

With Node.js installed, run from this directory:

```sh
npm start
```

This uses only Node's built-in modules; **no `npm install` or build is needed**. Open `http://127.0.0.1:8000`. Alternatively run `node scripts/preview.mjs`, or use Python with `python -m http.server 8000 --bind 127.0.0.1`. Stop the server with Ctrl+C. Opening `index.html` directly also works.

## Editing

- `index.html`: content, semantic sections, publication DOI links, and CV links.
- `css/site.css`: the active responsive stylesheet, served directly.
- `js/site.js`: mobile navigation, including Escape handling and keyboard focus. Research disclosures use native HTML `details`; all content and links remain usable without JavaScript.
- `img/security-network.svg` and `img/favicon.svg`: local vector artwork.
- `img/osama-al-wardi.jpg`: the supplied portrait, displayed in the homepage hero without altering the image.
- `img/Osama_Al_Wardi_Curriculum_Vitae.pdf`: the supplied current CV, copied without modification.
- `files/M_Sc_Thesis_Osama_Al_Wardi_Final.pdf` and `files/BSc_Thesis.pdf`: the supplied theses, copied without modification and linked for download in Education.

The page has no external font, stylesheet, or script dependencies. The older Bootstrap/jQuery vendor files, SCSS, `resume.*` assets, and older CV remain for reference and are not loaded by the redesigned homepage. The legacy Gulp/Travis configuration is not required for preview or publication. Edit `site.css` directly; editing legacy SCSS will not change this homepage.

## GitHub Pages

Publish the repository's static files from the root of the configured Pages source branch. GitHub Pages settings determine which branch is published; that setting is not stored here. There is no custom deployment workflow in this repository, and GitHub Pages does not need to run npm or Gulp for this homepage. Commit the HTML, stylesheet, script, SVGs, and CV together when ready to publish.

`CNAME` remains `www.osama-alwardi.com`. Preserve it when publishing. Custom-domain and DNS settings are managed separately in GitHub Pages and with the DNS provider. Relative asset URLs work at both a repository Pages path and the custom domain.

## Review before publishing

Check desktop and mobile sizes, navigation and Escape behavior, keyboard focus, expanded research details, publication links, and the CV download. Review the personal content and PDF before publishing. Work on the redesign branch does not deploy unless that branch is explicitly configured as a publishing source. Do not push or deploy until authorized.
