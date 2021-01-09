/*
let age = 16;
let menber = true;

let ans = null;
if (age <= 15 && menber) {
    ans = 800;
} else if (menber) {
    ans = 1000;
} else {
    ans = 1800;
}

document.write(ans + '<br>');



for(let i=1; i<=100000; i++){
    num = null;
    if (i % 3 == 0 && i % 5 == 0){
            num = 'FizzBuzz ';
    } else if (i % 3 == 0) {
        num = 'Fizz ';
    } else if (i % 5 == 0) {
        num = 'Buzz ';
    } else {
        num = i;
    }
    document.write(num + ' ');
}
*/

let hira = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (let i = 0; i < hira.length; i++){
    for (let j = 0; j < hira.length; j++) {
        //document.write('<p>' + hira[i] + hira[j] + '</p>');
        document.write(`<p>${hira[i]}${hira[j]}</p>`);
    }
}