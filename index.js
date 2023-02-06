// Display the title
document.getElementById("title").textContent

// Select Google hyperlink and change color to red
document.querySelector("li a").style.color = "red"

// Change 3rd hyperlink to blue color
document.getElementsByTagName("li")[2].style.color = "blue"

// Change background color of button to yellow
document.querySelector("button").style.backgroundColor = "yellow"

// Apply class "huge" to h1 element from css
document.querySelector("h1").classList.add("huge")

// Change title to "Good Bye" and apply emphasis to h1 tag
document.querySelector("h1").innerHTML = "<em>Good Bye</em>"

// Select the "https://www.google.com"
document.querySelector("a").getAttribute("href")