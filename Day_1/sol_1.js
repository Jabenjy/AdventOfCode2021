// Expected result: 1553
throw require('fs').readFileSync('i','utf8').split(/\n/).filter((a,b,c)=>-(-a)<-(-c[++b])).length