import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..','dist');
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.mp4':'video/mp4','.pdf':'application/pdf','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
 let pathname;
 try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end('Bad request');return}
 let file=path.resolve(root,'.'+pathname);
 if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 const found=fs.existsSync(file)&&fs.statSync(file).isFile();
 if(!found)file=path.join(root,'404.html');
 const size=fs.statSync(file).size;
 res.setHeader('Content-Type',types[path.extname(file).toLowerCase()]||'application/octet-stream');
 res.setHeader('Accept-Ranges','bytes');
 res.setHeader('X-Content-Type-Options','nosniff');
 if(found&&req.headers.range){
  const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
  let start=match?.[1]?Number(match[1]):0,end=match?.[2]?Number(match[2]):size-1;
  if(match&&!match[1]&&match[2]){start=Math.max(0,size-Number(match[2]));end=size-1}
  if(!match||start>=size||start>end||(!match[1]&&!match[2])){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return}
  end=Math.min(end,size-1);res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${size}`,'Content-Length':end-start+1});
  if(req.method==='HEAD')res.end();else fs.createReadStream(file,{start,end}).pipe(res);return;
 }
 res.writeHead(found?200:404,{'Content-Length':size});
 if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);
}).listen(port,()=>console.log(`Preview: http://localhost:${port}`));
