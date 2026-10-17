'use strict';
// Dependency-free PNG app icon: green square with the TestPilot check mark, antialiased.
const zlib=require('node:zlib');
const CRC=new Int32Array(256).map((_,n)=>{let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;return c;});
const crc32=buf=>{let c=-1;for(const b of buf)c=CRC[(c^b)&255]^(c>>>8);return (c^-1)>>>0;};
function chunk(type,data){const len=Buffer.alloc(4),crc=Buffer.alloc(4),body=Buffer.concat([Buffer.from(type,'ascii'),data]);len.writeUInt32BE(data.length);crc.writeUInt32BE(crc32(body));return Buffer.concat([len,body,crc]);}
function segmentDistance(px,py,[ax,ay],[bx,by]){const dx=bx-ax,dy=by-ay,t=Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/(dx*dx+dy*dy)));return Math.hypot(px-ax-t*dx,py-ay-t*dy);}
function icon(size){
 const bg=[0x20,0x5c,0x4c],fg=[0xff,0xf9,0xe3];
 // The mark stays inside the central 60%, the maskable safe zone.
 const pts=[[.31,.52],[.44,.65],[.70,.37]].map(([x,y])=>[x*size,y*size]),half=.045*size;
 const rows=[];
 for(let y=0;y<size;y++){const row=Buffer.alloc(1+size*3);for(let x=0;x<size;x++){
  const d=Math.min(segmentDistance(x+.5,y+.5,pts[0],pts[1]),segmentDistance(x+.5,y+.5,pts[1],pts[2]));
  const a=Math.max(0,Math.min(1,half-d+.5));for(let c=0;c<3;c++)row[1+x*3+c]=Math.round(bg[c]+(fg[c]-bg[c])*a);}
  rows.push(row);}
 const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);ihdr[8]=8;ihdr[9]=2;
 return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',zlib.deflateSync(Buffer.concat(rows),{level:9})),chunk('IEND',Buffer.alloc(0))]);
}
module.exports={icon};
