
	function Telefon(marka, cena, kolor, slots, memory) {
		this.marka = marka;
		this.cena = cena;
		this.kolor = kolor;
		//
		this.slots = slots;
		this.memory = memory;
	}

	Telefon.prototype.printInfo = function () {
		var message = 'Marka telefonu to ' + this.marka;
		message += ', kolor to ' + this.kolor;
		message += ', a cena to ' + this.cena + ' zł.';
		message += ', koszt gwarancji to ' + getWarrantyCost(this.cena) + ' zł';
		console.log(message);
	}

	Telefon.prototype.memoryPerPln = function () {
		var message = Math.floor(parseFloat(this.memory / this.cena, 2) * 100) / 100 + ' MB/zł';
		console.log(message);
	}
	

function getWarrantyCost(fullprice) {
		return fullprice *0.1;
	}

var iPhone6S = new Telefon("Apple", 2250, "srebrny", 1, 2000);
var SamsungGalaxy = new Telefon("Samsung", 709, "czarny", 1, 500);
var HTC10 = new Telefon("HTC", 329, "biały", 2, 1000);

iPhone6S.printInfo();
iPhone6S.memoryPerPln();

SamsungGalaxy.printInfo();
SamsungGalaxy.memoryPerPln();

HTC10.printInfo();
HTC10.memoryPerPln();
