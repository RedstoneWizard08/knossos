function O(i,o=Date.now(),s=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"})){const r=[{ge:31536e6,divisor:31536e6,unit:"year"},{ge:2592e6,divisor:2592e6,unit:"month"},{ge:6048e5,divisor:6048e5,unit:"week"},{ge:864e5,divisor:864e5,unit:"day"},{ge:36e5,divisor:36e5,unit:"hour"},{ge:6e4,divisor:6e4,unit:"minute"},{ge:3e4,divisor:1e3,unit:"seconds"},{ge:0,divisor:1,text:"just now"}],n=(typeof o=="object"?o.getTime():new Date(o).getTime())-(typeof i=="object"?i:new Date(i)).getTime(),c=Math.abs(n);for(const t of r)if(c>=t.ge){const e=Math.round(Math.abs(n)/t.divisor),u=n<0;return t.unit?s.format(u?e:-e,t.unit):t.text}}export{O as a};
