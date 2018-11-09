window.alert('We are having a promotion now! Tours booked for 2 to 5 people will get a $10 off EACH. Tours booked for 6 to 10 people will get $20 off EACH. 10 people or more will receive $30 off EACH.');
var date = new Date();
if (date.getMonth() + 1 < 10) {
    var month = '0' + (date.getMonth() + 1);
}
else {
    var month = date.getMonth() + 1;
}
if (date.getDate() < 10) {
    var day = '0' + date.getDate();
}
else {
    var day = date.getDate();
}
var fixeddate = date.getFullYear() + '-' + month + '-' + day;
var DOB = (date.getFullYear() - 18) + '-' + month + '-' + day;
window.onload = function () {
    document.getElementById("date").value = fixeddate;
    document.getElementById("date").min = fixeddate;
    document.getElementById("DOB").value = DOB;
    document.getElementById("DOB").max = DOB;
};

function TajMahalFees() {
    totalnopeople = Number(document.getElementById("Senior").value) + Number(document.getElementById("Adults").value) + Number(document.getElementById("Child").value) + Number(document.getElementById("Infant").value);
    if (totalnopeople === 0) {
        wonderprice = 0;
    }
    if (totalnopeople === 1) {
        wonderprice = document.getElementById("destinationcountry").value;
    }
    if (2 <= totalnopeople <= 5) {
        wonderprice = document.getElementById("destinationcountry").value - 10;
    }
    if (5 <= totalnopeople <= 10) {
        wonderprice = document.getElementById("destinationcountry").value - 20;
    }
    if (totalnopeople > 10) {
        wonderprice = document.getElementById("destinationcountry").value - 30;
    }
    return [wonderprice, totalnopeople];
}

function calculatetotal() {
    nosenior = document.getElementById("Senior").value;
    noadults = document.getElementById("Adults").value;
    nochildren = document.getElementById("Child").value;
    noinfants = document.getElementById("Infant").value;
    wonderprice = TajMahalFees()[0];
    totalnopeople = TajMahalFees()[1];
    price = wonderprice * (1 * noadults) + wonderprice * (0.8 * nochildren) + wonderprice * (0.3 * noinfants);
    if (price <= 0 ) {
        document.getElementById("totalprice").innerHTML = "Please enter the number of people going for the tour!";
    }
    else {
        if (nosenior!= "" && nosenior != 0) {
            document.getElementById("totalprice").innerHTML += "<br>Seniors &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspx" + nosenior + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp$" + (wonderprice * (0.5 * nosenior)).toFixed(2);
        }
        document.getElementById("totalprice").innerHTML = "There are : <br>Adults &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspx" + noadults + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp$" + (wonderprice * (1 * noadults)).toFixed(2);
        if (nochildren != "" && nochildren != 0) {
            document.getElementById("totalprice").innerHTML += "<br>Children &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspx" + nochildren + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp$" + (wonderprice * (0.8 * nochildren)).toFixed(2);
        }
        if (noinfants != "" && noinfants != 0) { 
            document.getElementById("totalprice").innerHTML += "<br>Infants &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspx" + noinfants + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp$" + (wonderprice * (0.3 * noinfants)).toFixed(2);
        }
        document.getElementById("totalprice").innerHTML += "<br>Total Number of people = " + totalnopeople;
        document.getElementById("totalprice").innerHTML += "<br>The total estimated price of your tour would be $" + price.toFixed(2);
    }
}

function submitpopup() {
    document.getElementById('dialogh3').innerHTML = "Thank you, " + document.getElementById("Title").value + " " + document.getElementById("FirstName").value + " " + document.getElementById("LastName").value + ", for the enquiry!";
    var dialog = document.getElementById("glass");
    dialog.style.visibility = "visible";
    event.preventDefault();
}
function OK() {
    window.location.href = "./index.html";
}
