import{g as u}from"./gameVersions-3a0f8262.js";function d(t){const o=u.slice().reverse(),p=o.filter(e=>e.version_type==="release"),r=[];let a=0;for(let e=0;e<t.length;e++){const n=o.findIndex(s=>s.version===t[e]),l=p.findIndex(s=>s.version===t[e]);if(e===0)r.push([[t[e],n,l]]);else{const s=r[a];(n-s[s.length-1][1]===1||l-s[s.length-1][2]===1)&&(o[s[0][1]].version_type==="release"||o[n].version_type!=="release")?s[1]=[t[e],n,l]:(a+=1,r[a]=[[t[e],n,l]])}}const i=[];for(let e=0;e<r.length;e++){const n=r[e];if(n.length===2&&n[0][2]!==-1&&n[1][2]===-1){let l=null;for(let s=n[1][1];s>n[0][1];s--)if(o[s].version_type==="release"){i.push([n[0],[o[s].version,s,p.findIndex(f=>f.version===o[s].version)]]),l!==null&&l!==s+1?i.push([[o[l].version,l,-1],n[1]]):i.push([n[1]]);break}else l=s}else i.push(n)}const h=[];for(const e of i)e.length===2?h.push(`${e[0][0]}\u2014${e[1][0]}`):h.push(e[0][0]);return h.join(", ")}const v=t=>t.find(o=>o.primary)||t[0];function g(t){return`https://api.modrinth.com/v2/version_file/${t==null?void 0:t.hashes.sha1}/download`}export{g as d,d as f,v as g};
