
var nocake=prompt("how many cake do you want to order");
var orderdetails;

if (nocake > 3 && nocake <= 5){
    orderdetails="you gained discount of 25%";
}
else if (nocup > 5 && nocup <= 10){
    orderdetails="you gained discount of 50%";

}
else if (nocup >= 10){
    orderdetails="no discount";
}



document.write(orderdetails);
document.getElementById ("order").innerText=caketype;

confirm ("are you happy with discount");
alert ("thank you");
