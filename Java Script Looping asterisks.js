//1. Menyusun Barisan Bintang
var rows = 5;
for(var i=0; i<5; i++){
	console.log('*');
}
//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2= 5;
for(var i=0; i<rows2; i++){
  var star = '';
  for(j=0;j<rows2;j++){
        star += '*';
  }
    console.log(star)  
}
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3= 5;
var star = '';
for(var i=0; i<rows3; i++){
    star += '*';
    console.log(star)  
}