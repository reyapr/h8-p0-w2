// Output untuk Input nama = '' dan peran = ''
if(nama == ''){
	console.log('Nama harus diisi!');
}
//Output untuk Input nama = 'Mikael' dan peran = ''
else if(peran == ''){
	console.log('Halo ' + nama + ' , Pilih peranmu untuk memulai game!');
}
//Output untuk Input peran 'Ksatria'
else if (peran == 'Ksatria'){
	console.log('Selamat datang di Dunia Proxytia, ' + nama);
	console.log('Halo ' + peran + ' ' + nama +', kamu dapat menyerang dengan senjatamu!')
}
//Output untuk Input peran 'Tabib'
else if (peran == 'Tabib') {
	console.log('Selamat datang di Dunia Proxytia, ' + nama );
	console.log('Halo ' + peran + ' ' + nama + ' , kamu akan membantu temanmu yang terluka.')
}
//Output untuk Input peran 'Penyihir'
else if (peran == 'Penyihir'){
	console.log('Selamat datang di Dunia Proxytia, ' + nama);
	console.log('Halo ' + peran + ' '+ nama + ' , ciptakan keajaiban yang membantu kemenanganmu!')
}
else {
	console.log('Maaf peran tidak tersedia, silahkan mengisi peran yang sudah tersedia')
}
