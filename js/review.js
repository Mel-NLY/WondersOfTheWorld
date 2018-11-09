// JavaScript source code
//Set max date to yesterday
var mDate = new Date();
mDate.setDate(mDate.getDate() - 1);

var dd = mDate.getDate();
var mm = mDate.getMonth() + 1;
var yyyy = mDate.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
mDate = yyyy + '-' + mm + '-' + dd;
document.getElementById("iDate").setAttribute("max", mDate);


function PopUp() {
    var title = document.getElementById("iTitle").value;
    var name = document.getElementById("iName").value;
    alert("Thank You " + title + " " + name + " " + "for your review");
}