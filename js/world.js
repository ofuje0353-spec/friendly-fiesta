window.World = (()=>{const buildings=[
 {x:230,y:170,w:220,h:150,name:"Central Market",kind:"market",color:"#c47b45"},
 {x:650,y:150,w:210,h:160,name:"Food Corner",kind:"food",color:"#b65f4c"},
 {x:1090,y:180,w:240,h:150,name:"Student Lodge",kind:"housing",color:"#d0a35c"},
 {x:1560,y:210,w:220,h:160,name:"Study Centre",kind:"study",color:"#688b9b"},
 {x:300,y:620,w:260,h:180,name:"Kpakungu Homes",kind:"home",color:"#ba9b72"},
 {x:850,y:650,w:210,h:150,name:"Phone & More",kind:"shop",color:"#627fa3"},
 {x:1360,y:650,w:260,h:180,name:"Transport Hub",kind:"transport",color:"#bd9d56"},
 {x:1770,y:680,w:210,h:160,name:"Community Park",kind:"park",color:"#4d946e"}
];const roads=[{x:0,y:390,w:2200,h:110},{x:0,y:930,w:2200,h:100},{x:560,y:0,w:100,h:1600},{x:1300,y:0,w:100,h:1600}];const trees=[];for(let i=0;i<65;i++){let x=70+(i*173)%2050,y=80+(i*239)%1450;if(!buildings.some(b=>x>b.x-30&&x<b.x+b.w+30&&y>b.y-30&&y<b.y+b.h+30)&&!roads.some(r=>x>r.x&&x<r.x+r.w&&y>r.y&&y<r.y+r.h))trees.push({x,y,r:10+(i%8)});}
function blocked(x,y,r=13){if(x<r||y<r||x>2200-r||y>1600-r)return true;return buildings.some(b=>x+r>b.x&&x-r<b.x+b.w&&y+r>b.y&&y-r<b.y+b.h)}function nearest(x,y,max=85){let best=null,d=max;for(const b of buildings){let dx=Math.max(b.x-x,0,x-(b.x+b.w)),dy=Math.max(b.y-y,0,y-(b.y+b.h)),dd=Math.hypot(dx,dy);if(dd<d){best=b;d=dd}}return best}function draw(ctx,camera,clock){ctx.save();ctx.translate(-camera.x,-camera.y);ctx.fillStyle="#78977b";ctx.fillRect(0,0,2200,1600);
 // plots
 for(let y=0;y<1600;y+=100)for(let x=0;x<2200;x+=100){ctx.fillStyle=((x+y)/100)%2?"#819c7e":"#789477";ctx.fillRect(x,y,98,98)}
 roads.forEach(r=>{ctx.fillStyle="#414b52";ctx.fillRect(r.x,r.y,r.w,r.h);ctx.fillStyle="#d6c18b";if(r.w>r.h){for(let x=r.x+15;x<r.x+r.w;x+=75)ctx.fillRect(x,r.y+r.h/2-2,34,4)}else{for(let y=r.y+15;y<r.y+r.h;y+=75)ctx.fillRect(r.x+r.w/2-2,y,4,34)}});
 // sidewalks
 buildings.forEach(b=>{ctx.fillStyle="#a5a08b";ctx.fillRect(b.x-10,b.y-10,b.w+20,b.h+20);ctx.fillStyle=b.color;ctx.fillRect(b.x,b.y,b.w,b.h);ctx.fillStyle="#263541";ctx.fillRect(b.x+b.w/2-22,b.y+b.h-35,44,35);ctx.fillStyle="#fff0cf";ctx.font="bold 15px sans-serif";ctx.textAlign="center";ctx.fillText(b.name,b.x+b.w/2,b.y-18);ctx.fillStyle="#ffffff66";for(let wx=b.x+18;wx<b.x+b.w-15;wx+=42)for(let wy=b.y+20;wy<b.y+b.h-45;wy+=38)ctx.fillRect(wx,wy,20,16)});
 trees.forEach(t=>{ctx.fillStyle="#5d4430";ctx.fillRect(t.x-3,t.y,6,13);ctx.fillStyle="#2c6548";ctx.beginPath();ctx.arc(t.x,t.y,t.r,0,Math.PI*2);ctx.fill();ctx.fillStyle="#4e8a5a";ctx.beginPath();ctx.arc(t.x-4,t.y-4,t.r*.65,0,Math.PI*2);ctx.fill()});
 // kiosks
 for(let i=0;i<8;i++){let x=100+i*255,y=i%2?520:1070;ctx.fillStyle="#e4b05b";ctx.fillRect(x,y,48,34);ctx.fillStyle="#a94c38";ctx.fillRect(x,y,48,8);ctx.fillStyle="#293541";ctx.fillRect(x+8,y+14,32,20)}
 ctx.restore();
 const hour=clock.hour;const alpha=hour<6||hour>19?.52:hour<8?.22:hour>17?.2:0;if(alpha){ctx.save();ctx.fillStyle=`rgba(9,16,39,${alpha})`;ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);ctx.restore()}
 return buildings}return {draw,blocked,nearest,buildings,roads}})();