var clicks = 0;
function ClickClicked(){
  clicks = clicks + 1;
  document.getElementById("display").innerHTML = "You Have " + clicks + " Clicks";
}
