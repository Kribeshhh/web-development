const wrapper = document.querySelector(".wrapper");

// create the new div
const innerDiv = document.createElement("div");
innerDiv.className = "inner";         // add class
innerDiv.textContent = "This is inner text";  // add text

// append it inside .wrapper
wrapper.append(innerDiv);
