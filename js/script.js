
// Add active class
const btns = document.getElementsByClassName("sort");
const selected = document.querySelectorAll('option:checked');



/* for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");

      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      let liValue = this.getAttribute("data-value");
      let selValue = document.getElementById(liValue);
      selValue.selected = true;
    });
}; */
//Add button value to select and vica verca

const selectList = document.getElementById("select-list");

for(var i = 0; i<selectList.options.length;i++){
  for(var j = 0; j < btns.length; j++){
    let btnVal = btns[j].getAttribute('data-value');
    if(selectList[i].value === btnVal) {
      btns[j].classList.add(" active");
    }
  }
}
