let buf = '';
var Mday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
var day = today.getDay();

var dummies = (day - dd)%7; 

buf += '<div class="parent">';
buf += `<p>${yyyy}. ${mm}</p>`

for (var i in Mday){
  buf += `<div class="day">${Mday[i]}</div>`;
}

while(dummies > 0){
  buf += `<div class="dummy"></div>`;
  dummies--;
}

for (let day = 1; day <= 31; day++){
  buf += `<div class="number">${day}</div>`;
}
buf += '</div>';
document.getElementById('box').innerHTML = buf;
