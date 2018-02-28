//WHILE
var number = 0;
console.log('LOOPING PERTAMA');
while(number < 20){
	number += 2
	console.log(number + ' - I love coding');
}
console.log('LOOPING KEDUA');
while(number > 0 ){
	console.log(number + ' - I will become fullstack developer')
	number -= 2
}
//FOR LOOP
console.log('LOOPING PERTAMA');
for (var i=1; i<=20; i++){
	console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var i=20; i>0; i--){
	console.log(i + ' - I will become fullstack developer');
}
//ANGKA GANJIL GENAP
for(var i=1; i<=100; i++){
	if(i%2 != 0){
		console.log(i + ' GANJIL')
	}
	if(i%2 == 0){
		console.log(i + ' GENAP')
	}
}
//KELIPATAN 3 DARI PERTAMBAHAN COUNTER 2
for(var i=1; i<=100; i+=2){
	if(i%3 == 0){
		console.log(i + ' KELIPATAN 3')
	}
}
//KELIPATAN 6 DARI PERTAMBAHAN COUNTER 5
for(var i=1; i<=100; i+=5){
	if(i%6 == 0){
		console.log(i + ' KELIPATAN 6')
	}
}
//KELIPATAN 10 DARI PERTAMBAHAN COUNTER 9
for(var i=1; i<=100; i+=9){
	if(i%10 == 0){
		console.log(i + ' KELIPATAN 10')
	}
}