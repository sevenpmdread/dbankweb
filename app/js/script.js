const header = document.querySelector(".header");
const hamburger = document.querySelector("#hambtn");
const animate = document.querySelector(".overlay");
const fadeelems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

hamburger.addEventListener("click", function()
{
if(header.classList.contains("open"))
{
    //remove overlay
    //close hamburger
    body.classList.remove("noscroll");
 header.classList.remove("open");
 fadeelems.forEach(function(elements)
    {
elements.classList.add("fade-out");
 elements.classList.remove("fade-in");
    });
}
   

else
{ 
    //open hamburger
    body.classList.add("noscroll");
  
    header.classList.add("open");

    fadeelems.forEach(function(elements)
    { elements.classList.add("fade-in");
    elements.classList.remove("fade-out");

    });
  
}

});

