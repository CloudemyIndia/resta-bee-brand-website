import * as k from './anatomy/iso-kit.mjs';

// Anatomy geometry runs only during Astro rendering, never in the browser.
export const states = [
  { name: 'Capture', zone: 'terminal', title: 'The order starts with your team.', description: 'Choose dine-in, takeaway or staff-entered delivery. Capture the items and kitchen instructions before sending.', readout: 'Order captured · not sent', screen: 'ORDER CAPTURED' },
  { name: 'Prepare', zone: 'kitchen', title: 'A clear handoff to the kitchen.', description: 'Sent items enter the appropriate station queue. Preparation and item readiness remain separate from serving.', readout: 'Kitchen station · preparing', screen: 'IN PREPARATION' },
  { name: 'Serve', zone: 'pass', title: 'Ready for the next handoff.', description: 'Review ready quantities and coordinate pickup. The team records service separately; ready does not mean served.', readout: 'Ready for pickup · not served', screen: 'READY FOR PICKUP' },
  { name: 'Settle', zone: 'printer', title: 'From bill preview to collection.', description: 'Issue the bill and record the collection. This demonstration does not verify a bank payment or operate a real printer.', readout: 'Collection recorded · sample order', screen: 'COLLECTION RECORDED' },
];

export function buildStation() {
  const W = 860, H = 610;
  const base = { x: -156, y: -72, w: 312, d: 190, r: 5 };
  const P = k.fitProjection([...k.boxCorners(base, -30, 0), [-140,-58,158], [156,118,158]],W,H,{pad:30,azimuth:48,elevation:29});
  const parts=[];
  function slab(id,zone,x,y,w,d,z,h,r=1.2,material='stone') {
    const plan={x,y,w,d,r};
    parts.push({ id,zone, x,y,w,d,z,h, material, depth:k.depthOf([x+w/2,y+d/2,z+h/2],P), svg:k.solidSvg(k.slabOf(plan,z,h,P,5,Math.min(.65,h/3)),{tone:'mid',crease:'faint'}) });
  }
  // Base: actual panels, apron, legs, feet and a pale countertop.
  slab('counter-shell','base',-153,-69,306,184,-17,17,3);
  slab('counter-top','base',-156,-72,312,190,0,5,5,'ivory');
  for(const x of [-143,132]) for(const y of [-59,97]) {
    slab(`leg-${x}-${y}`,'base',x,y,10,10,-29,12,1,'metal');
    slab(`foot-${x}-${y}`,'base',x-1,y-1,12,12,-31,2,1,'dark');
  }
  for(let i=0;i<3;i++) {
    slab(`drawer-face-${i}`,'base',-149+i*99,114,96,2,-15,13,1,'stone');
    slab(`drawer-pull-${i}`,'base',-116+i*99,116,30,2,-7,1.6,.5,'metal');
  }
  // Modern terminal: stand, upright neck, hinge blocks, housing and mounted face.
  slab('terminal-base','terminal',-111,14,83,53,5,4,4,'dark');
  slab('terminal-base-inlay','terminal',-106,19,73,43,9,.8,3,'metal');
  slab('terminal-neck','terminal',-79,22,19,16,9.8,60,2,'dark');
  slab('neck-rear-cover','terminal',-77,22,15,3,24,33,1,'metal');
  for(const x of [-84,-61]) slab(`hinge-${x}`,'terminal',x,19,8,22,63,12,2,'metal');
  slab('terminal-back','terminal',-133,17,126,8,70,81,4,'dark');
  slab('terminal-bezel','terminal',-134,25,128,3,69,83,4,'dark');
  slab('screen-glass','terminal',-128,28,116,.3,76,69,2,'screen');
  for(let i=0;i<7;i++) slab(`rear-vent-${i}`,'terminal',-125+i*7,16,4,.8,91,14,.4,'metal');
  slab('power-key','terminal',-9,29,1.4,1,80,5,.4,'metal');
  slab('stand-pad-left','terminal',-108,19,5,39,9.8,.4,.5,'dark');
  slab('stand-pad-right','terminal',-36,19,5,39,9.8,.4,.5,'dark');
  // Ticket rail and its real posts/clips, behind the pass.
  for(const x of [12,139]) {
    slab(`rail-mount-${x}`,'kitchen',x,-53,13,13,5,3,1,'metal');
    slab(`rail-post-${x}`,'kitchen',x+4,-49,5,5,8,68,1,'metal');
    slab(`rail-cap-${x}`,'kitchen',x+2,-51,9,9,76,2,1,'metal');
  }
  slab('ticket-rail','kitchen',13,-47,135,5,70,8,1,'metal');
  for(let i=0;i<3;i++) {
    const x=26+i*38;
    slab(`ticket-${i}`,'kitchen',x,-41,29,.5,38,33,.3,'paper');
    slab(`ticket-clip-${i}`,'kitchen',x+10,-40.5,9,2,66,8,.8,'dark');
  }
  // Thermal printer, mounted feet, lid, cutter, slot and control keys.
  for(const x of [45,94]) for(const y of [35,77]) slab(`printer-foot-${x}-${y}`,'printer',x,y,5,5,5,2,.6,'dark');
  slab('printer-bottom','printer',41,31,63,57,7,4,3,'dark');
  slab('printer-body','printer',42,32,61,55,11,27,4,'dark');
  slab('printer-lid','printer',43,33,59,53,38,3,4,'metal');
  slab('paper-exit','printer',51,61,43,15,41,.7,1,'dark');
  slab('cutter-lip','printer',50,77,45,2,38,2,.5,'metal');
  slab('printer-front-panel','printer',47,87,51,1,14,17,1,'metal');
  slab('feed-key','printer',93,48,5,7,41,1.2,1,'dark');
  slab('printer-indicator','printer',94,40,3,3,41,.6,.6,'accent');
  slab('receipt-paper','printer',53,65,39,34,42,.25,.2,'paper');
  // Kitchen pass: well-built raised tray and two plated portions.
  slab('pass-plinth','pass',-8,-6,131,27,5,5,2,'stone');
  slab('pass-top','pass',-10,-8,135,31,10,1.4,2,'metal');
  for(const x of [2,65]) {
    slab(`tray-${x}`,'pass',x,-3,48,20,11.4,1.3,3,'paper');
    slab(`portion-${x}`,'pass',x+9,2,29,10,12.7,3,2,'stone');
  }
  // All details are closed shapes or explicitly printed rules; no loose decorative lines.
  for(const t of parts.filter(p=>p.id.startsWith('ticket-')&&!p.id.includes('clip')&&!p.id.includes('rail'))) {
    t.svg += `<g class="printed" transform="${k.sideMatrix([t.x+4,t.y+t.d+.02],t.z+t.h-7,P,'left')}">${[0,4,8,15,19].map((y,i)=>`<rect x="0" y="${y}" width="${i===3?14:21}" height=".7" rx=".2"/>`).join('')}</g>`;
  }
  const face=parts.find(p=>p.id==='screen-glass');
  face.svg+=`<g transform="${k.sideMatrix([-125,28.34],142,P,'left')}" class="screen-ui"><rect width="110" height="62" rx="1" fill="#f8f4ec"/><rect width="110" height="8" fill="#252724"/><rect x="5" y="3" width="4" height="2" fill="#f5a623"/><rect x="13" y="3" width="26" height="1.6" fill="#f8f4ec"/><rect x="76" y="12" width="30" height="46" rx="1" fill="#e8e1d5"/>${[0,1,2,3].map(i=>`<rect x="5" y="${13+i*11}" width="65" height="8" rx="1" fill="#ebe6dc"/><rect x="9" y="${16+i*11}" width="${28+i*4}" height="1.3" fill="#78776c"/>`).join('')}<rect x="80" y="17" width="21" height="1.4" fill="#5c5b52"/><rect x="80" y="23" width="16" height="1.2" fill="#8c897e"/><rect x="80" y="29" width="21" height="1.2" fill="#8c897e"/><rect x="79" y="47" width="24" height="7" rx="1" fill="#f5a623"/><path class="screen-check" d="M87 50l2 2 4-4" fill="none" stroke="#24251f" stroke-width="1.3"/></g>`;
  const receipt=parts.find(p=>p.id==='receipt-paper');
  receipt.svg+=`<g class="printed" transform="${k.topMatrix([57,70],42.3,P)}">${[0,4,8,14,18,22].map((y,i)=>`<rect x="0" y="${y}" width="${i===3?20:30}" height=".65" rx=".2"/>`).join('')}</g>`;
  // Sort disjoint solid parts by their projected world position. Scene has no cables/lathes.
  const art=parts.sort((a,b)=>(a.zone==='base'?0:1)-(b.zone==='base'?0:1)||a.depth-b.depth).map(p=>`<g class="station-part material-${p.material}" data-zone="${p.zone}" data-part="${p.id}">${p.svg}</g>`).join('');
  const halo=`<path class="station-shadow" d="${k.haloOf(base,-31,14,P)}"/>`;
  return { count:parts.length, svg:k.figureSvg({width:W,height:H,label:'Illustrative restaurant service counter with POS terminal, ticket rail, kitchen pass and receipt printer',body:halo+art}), paths:(art.match(/<path/g)||[]).length };
}
