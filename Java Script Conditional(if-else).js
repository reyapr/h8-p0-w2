// Output untuk Input nama = '' dan peran = ''
if(nama == ''){
	console.log('Nama harus diisi!');
}
//Output untuk Input nama = 'Mikael' dan peran = ''
else if(nama == 'Mikael' && peran == ''){
	console.log('Halo ' + nama + ' , Pilih peranmu untuk memulai game!');
}
//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
else if (nama == 'Nina' && peran == 'Ksatria'){
	console.log('Selamat datang di Dunia Proxytia, ' + nama);
	console.log('Halo ' + peran + ' ' + nama +', kamu dapat menyerang dengan senjatamu!')
}
//Output untuk Input nama = 'Danu' dan peran 'Tabib'
else if (nama == 'Danu' && peran == 'Tabib') {
	console.log('Selamat datang di Dunia Proxytia, ' + nama );
	console.log('Halo ' + peran + ' ' + nama + ' , kamu akan membantu temanmu yang terluka.')
}
//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
else if (nama == 'Zero' && peran == 'Penyihir'){
	console.log('Selamat datang di Dunia Proxytia, ' + nama);
	console.log('Halo ' + peran + ' '+ nama + ' , ciptakan keajaiban yang membantu kemenanganmu!')
}


