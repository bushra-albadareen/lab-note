var order =prompt ("what do you want red velvet or carrot");

while ( order != "red velvet" && order !== "carrot" ){
    order =prompt ("what do you want red velvet or carrot");
}

var itemorder = ""; 

if (order === "red velvet" ){
    itemorder = " <img src='red-velvet.jpg'/>"
} else if (order === "carrot"){
    itemorder = "<img src= 'carrot.jpg'/>"
}

var nocake=prompt("how many cake do you want to order");
var result = '';

for (var i=0; i< nocake; i++){
    result = result + itemorder;
}
   

document.write (result);