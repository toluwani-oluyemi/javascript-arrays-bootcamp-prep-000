var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]
  
 function addElementToBeginningofArray(array,element)
 {
  return [... addElementToBeginningofArray,element]
 }
  
  function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}
function addElementToEndofArray(array,element)
 {
   array.push
  return [element,...array]
 }
  
  function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
  }
  function accessElementInArray(array,index) {
    return[element,index]
  }
  
  function destructivelyRemoveElementToEndOfArray(array){
  array.unshift
  return array
  } 
  
  