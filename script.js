let navLinks = document.getElementById ("navLinks");

        // To show the menu bar when clicked on the bars symbol
        function showMenu() {
            navLinks.style.right = "0";
        }

        // To hide the menu bar when clicking the x symbol
        function hideMenu() {
            navLinks.style.right = "-200px";
        }


// When the user clicks on the button, the popup opens
function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}