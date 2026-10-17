"""Extract the two supplied PDFs for local content review; never bundle the originals."""
from pathlib import Path
from pypdf import PdfReader
import pdfplumber
import re

out = Path(__file__).resolve().parents[1] / 'artifacts' / 'sources'
out.mkdir(parents=True, exist_ok=True)
sources = [('map', Path('E:/Progetto Cyber/MappaConcettuale_ISTQB_CTFL-AT.pdf')), ('agile', Path('E:/Progetto Cyber/ISTQB Foundation Level Agile Te - Katie Graner.pdf'))]
for name, path in sources:
    reader = PdfReader(path)
    pages = [f'\n=== PDF PAGE {i+1} ===\n{page.extract_text() or ""}' for i, page in enumerate(reader.pages)]
    (out / f'{name}.txt').write_text('\n'.join(pages), encoding='utf-8')
    print(name, 'pages:', len(pages), 'characters:', sum(map(len,pages)))
    print('\n'.join(pages[:2])[:6000])
    with pdfplumber.open(path) as pdf:
        pdf.pages[0].to_image(resolution=100).save(out / f'{name}-page-1.png')
        if name == 'agile':
            for number in [9, 14, 81, 87]:
                pdf.pages[number-1].to_image(resolution=100).save(out / f'agile-page-{number}.png')
    if name == 'agile':
        raw='\n'.join(pages)
        matches=list(re.finditer(r'(?m)^(\d+)\. (.+?)(?=\nA\))',raw,re.S))
        unique={}
        for m in matches:
            prompt=re.sub(r'=== PDF PAGE \d+ ===','',m.group(2))
            if len(prompt)>700: continue
            prompt=' '.join(prompt.split())
            page=re.findall(r'=== PDF PAGE (\d+) ===',raw[:m.start()])[-1]
            unique.setdefault(prompt,[]).append(f'p{page}/q{m.group(1)}')
        lines=[f'{i+1}. [{", ".join(refs)}] {q}' for i,(q,refs) in enumerate(unique.items())]
        (out/'unique-prompts.txt').write_text('\n'.join(lines),encoding='utf-8')
        print('Question occurrences:',sum(map(len,unique.values())),'distinct prompts:',len(unique))
