from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlparse,unquote
root=Path('/mnt/data/boyd_rebuild/dist')
errors=[];edges=[]
for file in root.glob('**/*.html'):
 soup=BeautifulSoup(file.read_text(),'html.parser')
 for el in soup.find_all(['a','img','source','video','link','script']):
  for attr in ('href','src','poster','srcset'):
   s=el.get(attr)
   if not s or not s.startswith('/'):continue
   s=unquote(s.split('?',1)[0].split('#',1)[0]); target=root/s.lstrip('/')
   if target.is_dir():target=target/'index.html'
   if not target.exists():errors.append(f'{file.relative_to(root)} [{el.name}:{attr}] -> {s}')
   else:edges.append((file,s))
 print('Pages',len(list(root.glob('**/*.html'))),'internal path links/assets',len(edges),'broken',len(errors))
 for e in errors[:30]:print('BROKEN',e)
 # video playback expected files
for f in ['red-scare','collective-bargaining','highland','new-deal','know-your-ref']:
 assert (root/'video/ista'/f'{f}.mp4').exists()
assert len(list(root.glob('**/index.html')))==16
assert not errors
