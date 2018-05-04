function indoors() {
  
  event.preventDefault(); 
  
  // "document" is the name of the DOM (THIS ONE DOESN'T CHANGE)
  // "custInfo" is the name of the form
  // "name" is the name of the input
  // "value" is the value within that input (THIS ONE DOESN'T CHANGE)
  var theName = document.custInfo.name.value
  var theEmail = document.custInfo.email.value
  
  const p = document.getElementById("par")
  p.innerHTML = theName + " (" + theEmail + ") has indoor plants!"
  
}

function outdoors() {
  
  event.preventDefault(); 
  
  // "document" is the name of the DOM (THIS ONE DOESN'T CHANGE)
  // "custInfo" is the name of the form
  // "name" is the name of the input
  // "value" is the value within that input (THIS ONE DOESN'T CHANGE)
  var theName = document.custInfo.name.value
  var theEmail = document.custInfo.email.value
  
  const p = document.getElementById("par")
  p.innerHTML = theName + " (" + theEmail + ") has outdoor plants!"
  
}
