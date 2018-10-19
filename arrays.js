var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]
  
 function addElementToBeginningofArray(array,element)
 {
[element,...array]
return array
 }
  function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element)
 {
   array.push(element)
  return [array,element]
 }
  
  function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
  }
  function accessElementInArray(array,index) {
   array(index)
    return[element,index]
  }
  
  function destructivelyRemoveElementToEndOfArray(array){
  array.unshift
  return array
  } 

 
  