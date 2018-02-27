var tanggal = 1;
var bulan = 2;
var tahun = 2001;


switch(true){
	case (tanggal > 0 && tanggal<=31):
	hari = tanggal
	break;
	default:
	hari = '(input tanggal salah)'
	break;
}
switch(bulan){
	case 1: bulan = 'Januari';
	break;
	case 2: bulan = 'Februari';
	break;
	case 3: bulan = 'Maret';
	break;
	case 4: bulan = 'April';
	break;
	case 5: bulan = 'Mei';
	break;
	case 6: bulan = 'Juni';
	break;
	case 7: bulan = 'Juli';
	break;
	case 8: bulan = 'Agustus';
	break;
	case 9: bulan = 'September';
	break;
	case 10: bulan = 'Oktober';
	break;
	case 11: bulan = 'Nopember';
	break;
	case 12: bulan = 'Desember';
	break;
	default:
	bulan = '(input bulan salah)'
	break;
}
switch(true){
	case (tahun >=1900 && tahun <= 2200):
	console.log(hari +' '+ bulan+' '+ tahun)
	break;
	default:
	tahun = '(input tahun salah)';
	console.log(hari +' '+ bulan+' '+ tahun);
	break;
}
