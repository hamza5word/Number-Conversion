// JavaScript Document
function convertingENG(){
	
	var number = parseInt(document.getElementById('number').value);
    var area = document.getElementById('result');
	
	var cent, dixs, mono,
		Units = ['','one','two','three','four','five','six','seven','eight','nine'],
		Tens = ['','ten','tweenty','thirty','fourty','fifty','sixty','seventy','eighty','ninty'],
		special = ['ten','eleven', 'twelve'];

		mono = number%10;
	    dixs = ((number%100)-mono)/10;
	    cent = ((number%1000)-(dixs*10)-mono)/100;
	
    if(!isNaN(number) && !(number<0 || number>999)){
	if(cent===0 && dixs===0 && mono===0){
	area.setAttribute('value', 'zero');
}
	
	else if (cent===0 && dixs===0 && mono!==0){
	area.setAttribute('value',Units[mono]);
}
	
	else if (cent===0 && dixs===1 && (mono>=0 && mono<=2)){
	area.setAttribute('value',special[mono]);
}

	else if (cent===0 && dixs===1 && (mono>=3 && mono<=9)){		
	area.setAttribute('value',Units[mono]+'-teen');
}
	
    else if (cent===0 && dixs!==0 && mono===0){
	area.setAttribute('value',Tens[dixs]);	
}
	
	else if (cent===0 && dixs!==0 && mono!==0){
	area.setAttribute('value',Tens[dixs]+'-'+Units[mono]);	
}
	else if (cent!==0 && dixs===0 && mono===0){
	area.setAttribute('value',Units[cent]+'-hundred');	
	}
	else if (cent!==0 && dixs===0 && mono!==0){
	area.setAttribute('value',Units[cent]+'-hundred-'+Units[mono]);	
}
	else if (cent!==0 && dixs!==1 && mono!==0){		area.setAttribute('value',Units[cent]+'-hundred-'+Tens[dixs]+'-'+Units[mono]);
}
	else if (cent!==0 && dixs===1 && (mono>=0 && mono<=2)){
	area.setAttribute('value',Units[cent]+'-hundred-'+special[mono]);	
}
		
	else if (cent!==0 && dixs===1 && (mono>=3 && mono<=9)){
	area.setAttribute('value',Units[cent]+'-hundred-'+Units[mono]+'-teen');	
}
	else if (cent!==0 && dixs!==0 && mono===0){		area.setAttribute('value',Units[cent]+'-hundred-'+Tens[dixs]);	
		}
		
	else if (cent!==0 && dixs!==0 && mono!==0){		area.setAttribute('value',Units[cent]+'-hundred-'+Tens[dixs]+'-'+Units[mono]);	
		}
	else{
		area.setAttribute('value','UNVALID NUMBER');
	} 
	}

}

function convertingFRA(){
	var number = parseInt(document.getElementById('number').value);
    var area = document.getElementById('result');
	
	var cent, dixs, mono,
		Units = ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf'],
		Tens = ['','dix','vingt','trente','quarante','cinquante','soixante'],
		Special = ['dix','onze','douze','treize','quatorze','quinze','seize'];
	
	    mono = number%10;
	    dixs = ((number%100)-mono)/10;
	    cent = ((number%1000)-(dixs*10)-mono)/100;
	if(!isNaN(number) && !(number<0 || number>999)){
	if(cent===0 && dixs===0 && mono===0){                                             // 0 .........................................................
		area.setAttribute('value','zero');
    }
	
	else if (cent===0 && dixs===0 && mono!==0){                                       // 1 2 3 4 5 6 7 8 9 .........................................
		area.setAttribute('value',Units[mono]);
    }
	
	else if (cent===0 && dixs===1 && (mono>=1 && mono<=6)){                           // 11 12 13 14 15 16 .........................................
		area.setAttribute('value',Special[mono]);
    }
	
	else if (cent===0 && dixs===1 && (mono>=7 && mono<=9)){                           // 17 18 19 ..................................................
		area.setAttribute('value',Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===0 && (dixs>=1 && dixs<=6) && mono===0){                           // 10 20 30 40 50 60 .........................................
		area.setAttribute('value',Tens[dixs]);
    }
	
	else if (cent===0 && (dixs>=2 && dixs<=6) && mono>1){                           // 22 32 45 ..................................................
		area.setAttribute('value',Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===0 && (dixs>=2 && dixs<=6) && mono===1){                           // 21 31 41 ...........................................
		area.setAttribute('value',Tens[dixs]+'-et-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===7 && (mono>=0 && mono<=6)){                           // 70 71 72 73 ...............................................
		area.setAttribute('value',Tens[6]+'-'+Special[mono]);
    }
	
	else if (cent===0 && dixs===7 && (mono>=7 && mono<=9)){                           // 77 78 79  .................................................
		area.setAttribute('value',Tens[6]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===8 && mono===0){                                       // 80 ........................................................
		area.setAttribute('value',Units[4]+'-'+Tens[2]);
    }
	
	else if (cent===0 && dixs===8 && mono>1){                                       // 82 83 84 ..................................................
		area.setAttribute('value',Units[4]+'-'+Tens[2]+'-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===8 && mono===1){                                       // 81 ..................................................
		area.setAttribute('value',Units[4]+'-'+Tens[2]+'-et-'+Units[mono]);
    }
	
	else if (cent===0 && dixs===9 && (mono>=0 && mono<=6)){                           // 90 91 92 ..................................................
		area.setAttribute('value',Units[4]+'-'+Tens[2]+'-'+Special[mono]);
    } 
	
	else if (cent===0 && dixs===9 && (mono>=7 && mono<=9)){                           // 97 98 99 
		area.setAttribute('value',Units[4]+'-'+Tens[2]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===0 && mono>=0){                                        // 200 301 402 503.........
		area.setAttribute('value',Units[cent]+'-cents-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===1 && (mono>=1 && mono<=6)){                           // 211 312 413 514 615 716
		area.setAttribute('value',Units[cent]+'-cents'+'-'+Special[mono]);
    }
	
	else if (cent>1 && dixs===1 && (mono>=7 && mono<=9)){                           // 217 318 619
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent>1 && (dixs>=1 && dixs<=6) && mono===0){                           // 110 120 130 .........
		area.setAttribute('value',Units[cent]+'-cents'+'-'+Tens[dixs]);
    }
	
	else if (cent>1 && (dixs>=2 && dixs<=6) && mono>1){                           // 122 239 456 ..........
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent>1 && (dixs>=2 && dixs<=6) && mono===1){                           // 121 231 451 ..........
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Tens[dixs]+'-et-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===7 && (mono>=0 && mono<=6)){                           // 271 273 274 276
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Tens[6]+'-'+Special[mono]);
    }
	
	else if (cent>1 && dixs===7 && (mono>=7 && mono<=9)){                           // 277 278 279
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Tens[6]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===8 && mono===0){                                       // 280 380 580
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]);
    }
	
	else if (cent>1 && dixs===8 && mono>1){                                      // 282 384 583
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===8 && mono===1){                                      // 281 381 581
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-et-'+Units[mono]);
    }
	
	else if (cent>1 && dixs===9 && (mono>=0 && mono<=6)){                          // 291 293 296 294
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-'+Special[mono]);
    }
	
    else if (cent>1 && dixs===9 && (mono>=7 && mono<=9)){                          // 297 298 299 
	area.setAttribute('value',Units[cent]+'-cents'+'-'+Units[4]+'-'+Tens[2]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	
	
	
	else if (cent===1 && dixs===0 && mono>=0){                                        // 100 101 102 103.........
	area.setAttribute('value','cent-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===1 && (mono>=1 && mono<=6)){                           // 111 112 113 114 115 116
	area.setAttribute('value','cent'+'-'+Special[mono]);
    }
	
	else if (cent===1 && dixs===1 && (mono>=7 && mono<=9)){                           // 117 118 119
	area.setAttribute('value','cent'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===1 && (dixs>=1 && dixs<=6) && mono===0){                           // 110 120 130 .........
	area.setAttribute('value','cent'+'-'+Tens[dixs]);
    }
	
	else if (cent===1 && (dixs>=2 && dixs<=6) && mono>1){                           // 122 139 156 ..........
	area.setAttribute('value','cent'+'-'+Tens[dixs]+'-'+Units[mono]);
    }
	
	else if (cent===1 && (dixs>=2 && dixs<=6) && mono===1){                           // 121 131 151 ..........
	area.setAttribute('value','cent'+'-'+Tens[dixs]+'-et-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===7 && (mono>=0 && mono<=6)){                           // 171 173 174 176
	area.setAttribute('value','cent'+'-'+Tens[6]+'-'+Special[mono]);
    }
	
	else if (cent===1 && dixs===7 && (mono>=7 && mono<=9)){                           // 177 178 179
	area.setAttribute('value','cent'+'-'+Tens[6]+'-'+Tens[1]+'-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===8 && mono===0){                                       // 180 180 180
	area.setAttribute('value','cent'+'-'+Units[4]+'-'+Tens[2]);
    }
	
	else if (cent===1 && dixs===8 && mono>1){                                      // 182 184 183
	area.setAttribute('value','cent'+'-'+Units[4]+'-'+Tens[2]+'-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===8 && mono===1){                                      // 182 184 183
	area.setAttribute('value','cent'+'-'+Units[4]+'-'+Tens[2]+'-et-'+Units[mono]);
    }
	
	else if (cent===1 && dixs===9 && (mono>=0 && mono<=6)){                          // 191 193 196 194
	area.setAttribute('value','cent'+'-'+Units[4]+'-'+Tens[2]+'-'+Special[mono]);
    }
	
    else if (cent===1 && dixs===9 && (mono>=7 && mono<=9)){                          // 197 198 199 
	area.setAttribute('value','cent'+'-'+Units[4]+'-'+Tens[2]+'-'+Tens[1]+'-'+Units[mono]);
    }
	else{
		area.setAttribute('value','Nombre n\'est pas valide');
	} 
	}
}

function next()
{
	var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) || (value<0 || value>999) ? -1 : value;
    value++;
    document.getElementById('number').value = value;
}

function previous()
{
	var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) || (value<0 || value>999) ? 1 : value;
    value--;
    document.getElementById('number').value = value;
}


	









