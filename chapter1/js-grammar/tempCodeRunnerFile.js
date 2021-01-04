let age = 16;
let menber = true;

ans = null;
if (age <= 15 && menber) {
    ans = 800;
} else if (menber) {
    ans = 1000;
} else {
    ans = 1800;
}

document.write(ans + '<br>');