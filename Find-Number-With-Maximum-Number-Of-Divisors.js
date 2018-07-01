const divNum = (a, b) => {
  bg=0; asw=a;
  if (a==0 && b==0) {
    return 0;
  }
  else {
  for (let i=a; i<=b; i++) {
    sum=0;
    for (let j=1; j<=i; j++) {
      i%j==0 ? sum+=1 : null;
    }
    if (sum>bg) {bg = sum; anw = i;}
  }
  return anw;
  }
};