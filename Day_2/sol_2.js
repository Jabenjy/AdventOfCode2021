i=require('fs').readFileSync('i','utf8').split(/\n/).map(a=>a.split(" "))
for(a=n=f=d=0;n<i.length;x=i[n],l=x[0][0],y=x[1]- -0,l=='u'?a-=y:l=='d'?a+=y:(f+=y,d+=a*y),n++,console.log(l));
console.log(f*d)