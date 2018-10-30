
// Add active class
var btns = document.getElementsByClassName("sort");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var value = this.getAttribute("data-value");
      document.getElementById(value).selected = true;
    });
};
//Add button value to select and vica verca
var selects = document.querySelectorAll('select > option');
for(var z = 0; z < selects.length; z++) {
  if(selects.selected = true) {
    var listItem = document.getElementsByClassName('sort');
    if(this.getAttribute("value") == listItem.getAttribute("data-value")) {
      listItem.className += " active";
    };
  };
};
console.log(selects);
