import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';
const driver='/Users/akashverma/.agents/skills/anatomy/scripts/drive.mjs';
const viewports=[{width:1440,height:1000,name:'desktop'},{width:390,height:900,name:'mobile'},{width:320,height:800,name:'small'},{width:430,height:932,name:'wide-phone'},{width:768,height:1024,name:'tablet'},{width:1280,height:800,name:'laptop'}];
for(const {width,height,name} of viewports){
  const actions=[['eval',"document.querySelectorAll('img').forEach(i=>i.loading='eager');Promise.all([document.fonts.ready,...[...document.images].map(i=>i.decode().catch(()=>{}))]).then(()=>{const bad=[...document.images].filter(i=>!i.naturalWidth);if(bad.length)throw Error('Broken images: '+bad.map(i=>i.src));const overflow=[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1)&&getComputedStyle(e).position!=='absolute'}).map(e=>e.className);if(document.documentElement.scrollWidth>innerWidth+1)throw Error('Horizontal overflow: '+overflow.join(','));return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,images:document.images.length}})"],['shot',`.impeccable/review/${name}.png`,'body',1],['shot',`.impeccable/review/${name}-hero.png`,'body',1,[0,0,width,height]]];
  if(name==='desktop'||name==='mobile')actions.push(['eval',"({sections:[...document.querySelectorAll('.operations,.outlets,.pricing-section,.demo-check,.faq,.demo-section')].map(e=>{const r=e.getBoundingClientRect();return {name:e.className.split(' ')[0],x:r.left,y:r.top+scrollY,width:r.width,height:r.height}})})"]);
  const path=`/tmp/restabee-capture-${name}.json`;writeFileSync(path,JSON.stringify(actions));
  const run=spawnSync(process.execPath,[driver,'http://127.0.0.1:4322/','--actions',path,'--width',String(width),'--height',String(height),'--scale','1','--reduced'],{encoding:'utf8'});process.stdout.write(run.stdout);process.stderr.write(run.stderr);if(run.status)process.exit(run.status);
  const dimensions=run.stdout.split('\n').find(line=>line.startsWith('eval: {"sections"'));
  if(dimensions){const {sections}=JSON.parse(dimensions.slice(6));for(const rect of sections)await sharp(`.impeccable/review/${name}.png`).extract({left:Math.max(0,Math.round(rect.x)),top:Math.round(rect.y),width:Math.floor(rect.width),height:Math.floor(rect.height)}).toFile(`.impeccable/review/${name}-${rect.name}.png`);}
}
