var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]
  
 function addElementToBeginningofArray(array,element)
 {
  return [element,...array]
 }
  
  function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndofArray(array,element)
 {
  return [element,...array]
 }
  
  function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
  }
  function accessElementInArray(array,index) {
    return[element,index]
  }
  
    
  }