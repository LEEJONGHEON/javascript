
/*
var cnt = 0;
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 2; j++) {
        console.log('안녕' + ++cnt);
    }
}
*/

//단수 저장
for (var level = 2; level <= 9; level++) {
    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log('==========================');
}
