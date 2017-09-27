module.exports = function check(str, bracketsConfig) {
let i,array,element,flag=false;
array=str.split('');
if (array.length%2!=0) return false;
  while(array.length){
    for (i=0;i<array.length;i++){
      flag=false;
      if (element=compare(array[i],bracketsConfig)){
        if (array[i+1]==element){
          if (array.splice(i,2).length)
            flag=true;
            if (!array.length) return true;
             break;
          }
        }
      }
      if (flag==false) return false;
    }
  return true;
}
function compare (elem,config)
{
  for(let deafult of config)
  {
    if (elem==deafult[0]) {
      return deafult[1];
    }
  }
  return false;
}
function compareEnd(elem,config){
  for(let deafult of config)
  {
    if (elem==deafult[1]) {
      return false;
    }
  }
  return true;
}
