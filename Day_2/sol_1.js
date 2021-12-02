i=require('fs').readFileSync('i','utf8').split(/\n/).map(a=>a.split(" "))
for(n=u=f=d=0;n<i.length;x=i[n++],l=x[0][0],y=x[1]- -0,l=='u'?u+=y:l=='d'?d+=y:f+=y);
throw f*(d-u)