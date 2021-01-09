var age = 16;
var isMember = true;
var result = null;
if (age > 15 && isMember){
    result = 1000;
} else if (age > 15) {
    result = 1800;
} else {
    result = 800;
}
document.write(result);