
var dates = document.getElementById("dates");
var years = document.getElementById("years");
var months = document.getElementById("months");
var days = document.getElementById("days");
dates.max = new Date().toISOString().split("T")[0];



function calculateDateOfBirth(){
    
   var dateOfBirth = new Date(dates.value).getTime();
   
    var now = new Date().getTime();
    var diff = now - dateOfBirth;
    console.log(diff)
    var y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    var m = Math.floor(diff % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24 * (365.25/12)));
    var d = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25/12)) / (1000 * 60 * 60 * 24) );
    years.innerHTML = y;
    months.innerHTML = m;
    days.innerHTML = d;
}