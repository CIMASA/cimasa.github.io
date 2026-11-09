
    const citations = {
      watermark: `@inproceedings{cai2026where,
  title = {Where, What, Why: Toward Explainable 3D-GS Watermarking},
  author = {Cai, Mingshu and Li, Jiajun and Yoshie, Osamu and Ieiri, Yuya and Li, Yixuan},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year = {2026},
  url = {https://arxiv.org/abs/2603.08809}
}`,
      fluency: `@article{cai2026fluencyve,
  title = {FluencyVE: Marrying Temporal-Aware Mamba with Bypass Attention for Video Editing},
  author = {Cai, Mingshu and Li, Yixuan and Yoshie, Osamu and Ieiri, Yuya},
  journal = {IEEE Transactions on Multimedia},
  volume = {28},
  pages = {3202--3213},
  year = {2026},
  doi = {10.1109/TMM.2026.3651097}
}`,
      kgedit: `@misc{cai2026kgedit,
  title = {KGEdit: Ambiguity-Aware Knowledge Graphs for Training-Free Precise Video Generation and Editing},
  author = {Cai, Mingshu and Zhang, Miao and Yang, Chenghe and Li, Yixuan and Yoshie, Osamu and Ieiri, Yuya},
  year = {2026},
  eprint = {2605.29509},
  archivePrefix = {arXiv},
  primaryClass = {cs.CV},
  url = {https://arxiv.org/abs/2605.29509}
}`,
      thermal: `@inproceedings{cai2025thermal,
  title = {Multi-Attribute guided Thermal Face Image Translation based on Latent Diffusion Model},
  author = {Cai, Mingshu and Yoshie, Osamu and Ieiri, Yuya},
  booktitle = {2025 IEEE International Joint Conference on Biometrics (IJCB)},
  year = {2025},
  doi = {10.1109/IJCB65343.2025.11411523}
}`,
      mindskill: `@misc{li2026mindskill,
  title = {MIND-Skill: Quality-Guaranteed Skill Generation via Multi-Agent Induction and Deduction},
  author = {Li, Yixuan and Cai, Mingshu and Xiao, Ziyang and Wang, Wanyuan and Deng, Yanchen and An, Bo},
  year = {2026},
  eprint = {2605.08670},
  archivePrefix = {arXiv},
  url = {https://arxiv.org/abs/2605.08670}
}`,
      oragentbench: `@misc{li2026oragentbench,
  title = {ORAgentBench: Can LLM Agents Solve Challenging Operations Research Tasks End to End?},
  author = {Li, Jiajun and Cai, Mingshu and Li, Yixuan and Ding, Yu and Hou, Ran and Nie, Guanyu and Han, Xiongwei and Wang, Wanyuan},
  year = {2026},
  eprint = {2606.19787},
  archivePrefix = {arXiv},
  url = {https://arxiv.org/abs/2606.19787}
}`
    };
    let language = 'en';
    let activeFilter = 'all';
    const count = document.getElementById('paper-count');
    const updateCount = () => {
      const n = [...document.querySelectorAll('.publication')].filter(p => !p.hidden).length;
      count.textContent = language === 'en' ? `${n} ${n === 1 ? 'publication' : 'publications'}` : `${n} 篇论文`;
    };
    const setLanguage = (next) => {
      language = next;
      document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
      document.querySelectorAll('[data-en][data-zh]').forEach(el => {el.textContent = el.dataset[language];});
      const toggle = document.getElementById('language');
      toggle.textContent = language === 'en' ? '中文' : 'EN';
      toggle.setAttribute('aria-label', language === 'en' ? '切换至中文' : 'Switch to English');
      document.getElementById('close-dialog').setAttribute('aria-label', language === 'en' ? 'Close citation' : '关闭引用');
      document.querySelector('.filters').setAttribute('aria-label', language === 'en' ? 'Filter publications' : '筛选论文');
      document.getElementById('copy-status').textContent = '';
      updateCount();
      try {localStorage.setItem('mc-language', language);} catch (_) {}
    };
    document.getElementById('language').addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
    try {if (localStorage.getItem('mc-language') === 'zh') setLanguage('zh');} catch (_) {}
    document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      document.querySelectorAll('.publication').forEach(p => {p.hidden = activeFilter !== 'all' && p.dataset.category !== activeFilter;});
      updateCount();
    }));
    const dialog = document.getElementById('citation-dialog');
    const citationText = document.getElementById('citation-text');
    document.querySelectorAll('[data-bib]').forEach(button => button.addEventListener('click', () => {
      citationText.textContent = citations[button.dataset.bib];
      document.getElementById('copy-status').textContent = '';
      dialog.showModal();
    }));
    document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => {if (e.target === dialog) {const r = dialog.getBoundingClientRect();if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();}});
    document.getElementById('copy-citation').addEventListener('click', async () => {
      const status = document.getElementById('copy-status');
      try {await navigator.clipboard.writeText(citationText.textContent);status.textContent = language === 'en' ? 'Copied to clipboard.' : '已复制到剪贴板。';}
      catch (_) {const range = document.createRange();range.selectNodeContents(citationText);const selection = window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent = language === 'en' ? 'Text selected. Press Ctrl+C or ⌘C to copy.' : '已选中文本，请按 Ctrl+C 或 ⌘C 复制。';}
    });
  