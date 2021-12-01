i=require('fs').readFileSync('i','utf8').split(/\n/).map(Number)
for(n=x=0;n<i.length;i[n]+i[n+1]+i[n+2]<i[++n]+i[n+1]+i[n+2]?x++:x);
console.log(x)