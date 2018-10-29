
// Add active class
var btns = document.getElementsByClassName("sort");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var value = this.getAttribute("data-value");
      console.log(value);
      document.getElementById(value).selected = true;
    });
};
//Add button value to select and vica verca
