let str = "suyog";

function reverse(name){
  let str2=""
  for(let i=name.length-1;i>=0;i--){
    str2 += name[i]
  }
  return str2;
}

console.log(reverse(str))
