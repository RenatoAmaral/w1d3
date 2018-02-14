
function characterCount(string){
  var splitString = string.replace(/\s/g,'').split("")
  var finalCount = {}
  //console.log(splitString);
  for(var i = 0 ; i < splitString.length ; i++ ){
    if (splitString[i] in finalCount) {
    // console.log(splitString[i]);
      finalCount[splitString[i]] += 1
    }else {
      //console.log(splitString[i]);
      finalCount[splitString[i]] = 1
      //console.log(finalCount);
    }
  }
  return finalCount;
}

console.log(characterCount("lighthouse in the house"));