var caketype = prompt("what do you want red velvet or carrot ?");

while (caketype !== "red velvet" && caketype !== "carrot"){
    caketype = prompt("what do you want red velvet or carrot ?");
}

document.write(caketype);