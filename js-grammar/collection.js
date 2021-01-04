var chrs = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (var i = 0; i < chrs.length; i++){
    for (var j = 0; j < chrs.length; j++){
        document.write('<p>' + chrs[i]+chrs[j] + '</p>');
    }
}