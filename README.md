# Mingshu Cai — Academic Homepage

Personal academic website at https://cimasa.github.io/.

## Layout

A light gray background, a sticky profile sidebar with a circular portrait, blue accents, and white publication cards. The layout follows the visual reference at https://icoz69.github.io/. News and Lab Gallery are omitted.

The supplied portrait is stored unchanged at `assets/mingshu-cai.jpg`; CSS controls its circular framing. Publication illustrations are conceptual diagrams, not experimental results.

## Files

- `index.html`: bilingual profile, research, publications, education, and research support.
- `assets/site.css`: desktop and mobile layouts.
- `assets/site.js`: language preference, publication filters, and BibTeX dialog.
- `publications.bib`: downloadable publication citations.
- `.nojekyll`: serve the static files directly on GitHub Pages.

GitHub Pages publishes from `main` at the repository root. No build step or package installation is required.

Update `data-en` and `data-zh` together when editing text. Keep the citations in `assets/site.js` and `publications.bib` consistent. Change the CSS/JS version strings in `index.html` when updating their contents.

## Profile and publication sources

The profile, education, IJCB oral presentation, and W-SPRING-AI information come from the owner's supplied materials. The publication metadata and links are retained from the previous site:

- https://arxiv.org/abs/2603.08809
- https://doi.org/10.1109/TMM.2026.3651097
- https://arxiv.org/abs/2512.21015
- https://arxiv.org/abs/2605.29509
- https://arxiv.org/abs/2512.21032

No unpublished research, unconfirmed appointments, or citation counts are included.
