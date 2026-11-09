# Mingshu Cai — Academic Homepage

Personal academic website at https://cimasa.github.io/.

## Layout

A light gray background, a sticky profile sidebar with a circular portrait, blue accents, and white publication cards. The visual reference is https://icoz69.github.io/. News and Lab Gallery are omitted.

The supplied portrait is unchanged at `assets/mingshu-cai.jpg`; CSS controls its circular framing. Each publication thumbnail is extracted from a figure in the corresponding paper. Clicking a thumbnail opens its larger version.

## Files

- `index.html`: bilingual profile, academic service, all six owner-confirmed publications, education, and internship.
- `assets/site.css`: desktop and mobile layouts.
- `assets/site.js`: language preference, publication filters, and BibTeX dialog.
- `assets/publications/`: figures extracted from the paper PDFs listed below.
- `publications.bib`: downloadable citations for all six papers.
- `.nojekyll`: serve static files directly on GitHub Pages.

GitHub Pages publishes from `main` at the repository root. No build step or package installation is required.

Update `data-en` and `data-zh` together when editing text. Keep citations in `assets/site.js` and `publications.bib` consistent. Change the CSS/JS version strings in `index.html` when updating their contents.

## Profile and publication sources

Profile, education, academic service, IJCB oral presentation, internship, and contact information were supplied by the owner. The internship start date is 2026.04. The owner confirmed that the six listed papers cover their Scholar list on 2026-11-09. Publication metadata was checked against the papers' arXiv records; preprints are labeled explicitly. The full author list is shown, with Mingshu Cai in bold.

| Thumbnail | Source PDF | PDF page | Figure |
| --- | --- | --- | --- |
| `watermark.webp` | https://arxiv.org/pdf/2603.08809 | 3 | 2 |
| `fluency.webp` | https://arxiv.org/pdf/2512.21015 | 1 | 1 |
| `kgedit.webp` | https://arxiv.org/pdf/2605.29509 | 1 | 1 |
| `thermal.webp` | https://arxiv.org/pdf/2512.21032 | 3 | 2 |
| `mindskill.webp` | https://arxiv.org/pdf/2605.08670 | 4 | 1 |
| `oragentbench.webp` | https://arxiv.org/pdf/2606.19787 | 2 | 1 |

Published versions: https://doi.org/10.1109/TMM.2026.3651097 and https://doi.org/10.1109/IJCB65343.2025.11411523.
