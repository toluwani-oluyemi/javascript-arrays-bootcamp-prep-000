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