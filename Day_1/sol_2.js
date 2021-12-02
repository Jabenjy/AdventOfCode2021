// Expected result: 1597
throw require('fs').readFileSync('i','utf8').split(/\n/).filter((a,b,c)=>a- -(d=c[b+1])- -(e=c[b+2])<d- -e- -c[b+3]).length