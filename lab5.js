var order =prompt ("what do you want red velvet or carrot");

while ( order != "red velvet" && order !== "carrot" ){
    order =prompt ("what do you want red velvet or carrot");
}

var itemorder = ""; 

if (order === "red velvet" ){
    itemorder = " <img src= ' https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/02/red-velvet-cake-slice-2.jpg'/>"
} else if (order === "carrot"){
    itemorder = "<img src= 'https://i.ytimg.com/vi/EJ5AlErxLWY/maxresdefault.jpg'/>"
}

var nocake=prompt("how many cake do you want to order");
var result = '';

for (var i=0; i< nocake; i++)(
    result = result + itemorder;
)
document.write (result);