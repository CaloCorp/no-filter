/******************
 * YOUR CODE HERE *
 ******************/
function onlyOdds (array){
const oddNumbers=[]
  for(let i=0;i <array.length; i++) {
    const numberInTheList=array[i]
  
    if(numberInTheList % 2 !== 0) {
      oddNumbers.push(numberInTheList)
    }
  }

return oddNumbers

}


function onlyEvens (array){
  const evenNumbers=[]
    for(let i=0;i <array.length; i++) {
      const numberInTheList=array[i]
    
      if(numberInTheList % 2 === 0) {
        evenNumbers.push(numberInTheList)
      }
    }
    
  return evenNumbers
  
  }

function shortNamesOnly(names){
const theShortNames=[];

for (let i=0;i<names.length;i++){
const namesInTheArray=names[i]

if(namesInTheArray.length < 7){

  theShortNames.push(namesInTheArray)
}

}
return theShortNames;
}

function dNames (array){
const theDnames=[]

for (let i=0;i<array.length;i++){
const theListOfNamesAgain =array[i]
if(theListOfNamesAgain.startsWith('D')){

theDnames.push(theListOfNamesAgain)
}
}
return theDnames;
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
