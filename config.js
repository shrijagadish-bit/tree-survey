const CONFIG={
 SCRIPT_URL:"https://script.google.com/macros/s/AKfycbyTgs9KiUSOMh8BzHIYwPKfkvk5IzodYdc2ne-9erK6i99bei45SdDDnepU8F4UhcYi/exec",
 MAX_ACCURACY_M:5,   // GPS must be at least this good (metres) before submit without warning
 RARE_MAX:2,          // species with this many records or fewer are flagged "Rare"
 CENTER:[20.59,78.96],ZOOM:5 // map fits to data once records exist
};
function parseCSV(t){t=t.replace(/^\uFEFF/,"");return t.trim().split(/\r?\n/).slice(1).map(l=>{const c=[];let s="",q=0;for(const ch of l){if(ch=='"')q=!q;else if(ch==","&&!q){c.push(s);s=""}else s+=ch}c.push(s);return c.map(x=>x.trim())})}
