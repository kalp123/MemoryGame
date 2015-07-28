imgs = ['icon1','icon2','icon3','icon4','icon5','icon6','icon7','icon8','icon9','icon10'];
var randomized_imgs = randomize(imgs);
console.log('rnd : ' + randomized_imgs);


//== add td_onclick function onclick on all td elements ==//
for (var i = 1; i <= 20; i++) {
	document.getElementById(i).onclick = td_onclick;
};

///////////////////
//== functions ==//
//////////////////

function randomize(imgs){
	var randomized_imgs = [];
	var imgs = imgs.concat(imgs);
	var ln =  imgs.length;
	for (var i = 0; i < ln; i++) {
		var rnd;
		rnd = Math.random();
		rnd = rnd * (imgs.length);
		rnd = Math.floor(rnd);

		randomized_imgs.push(imgs[rnd]);
		imgs.splice(rnd,1);
	};
	return randomized_imgs;
} // func randomize end


var ct = 0;
var storage;
var tf;
var match = 0;
function td_onclick(){
	ct++;
	document.getElementById('ct').innerHTML = 'COUNT : ' + ct;
	var id = this.getAttribute('id');
	
	if( ct%2!=0 ){ // odd click
		console.log('put there!');
		
		//== clear things up ==//
		clearTimeout(tf);
		for (var i = 1; i <= 20; i++) {
			document.getElementById(i).innerHTML = "";
		};

		document.getElementById(id).innerHTML = "<img src='imgs/" + randomized_imgs[id-1] + ".png' />";
		storage = id;
	}else{ // even click
		console.log('evaluate! ');
		
		document.getElementById(id).innerHTML = "<img src='imgs/" + randomized_imgs[id-1] + ".png' />";

		//== evaluate start ==//
		if( randomized_imgs[id-1]==randomized_imgs[storage-1] && id!=storage ){ // match 
			match++;
			if( match==10 ){ // game over
				console.log('game over, score : ' + ct);
				document.getElementById('ct').innerHTML = 'GAME OVER !!! YOUR SCORE IS ( lesser the better ): ' + ct;
			} 
			
			//== remove onclick listener ==//
			document.getElementById(id).onclick = null;
			document.getElementById(storage).onclick = null;
			
			//== make elements blank ==//
			document.getElementById(id).innerHTML = '';
			document.getElementById(storage).innerHTML = '';
			
			//== make elements white ==//
			document.getElementById(id).style.backgroundColor = 'white';
			document.getElementById(storage).style.backgroundColor = 'white';
		//== evaluate end ==//

		}else{ // doesn't match 
			tf = setTimeout(function(){
				document.getElementById(id).innerHTML = '';
				document.getElementById(storage).innerHTML = '';
			}, 3000);
		}
		
	}
} // func td_onclick end



