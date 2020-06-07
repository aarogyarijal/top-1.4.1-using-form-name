let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/test-image.jpeg') {
      myImage.setAttribute ('src','../images/tset-image-2.jpg');
    } else {
      myImage.setAttribute ('src','../images/test-image.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() 
{
    myName = prompt('Please enter your name.');
    if(!myName || myName === null)
    {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Wassup, ' + myName;
}

if(!localStorage.getItem('name')) 
{
    setUserName();
} 
else 
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Wassup, ' + storedName;
}

myButton.onclick = function() 
{
    setUserName();
}