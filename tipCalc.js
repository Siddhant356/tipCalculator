function calcTip(){
	var bill = document.getElementById("bill").value;
	var service = document.getElementById("service").value;
	if(bill=== "" && service == 0){
		alert("Enter the values!!");
		return;
	}
	var tip = bill*service;
	document.getElementById("totalTip").style.display = "block"
	document.getElementById("tip").innerHTML = tip;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("calculate").onclick = function() {
  calcTip();

};