
function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function () {
		var self = this;
		this.$element = $('<button>'); 	// dlaczego "$" przy element? taka konwencja ?
										// tak tworzymy też elementy DOM w JQuery??
		this.$element.text(this.text);
		this.$element.click(function () {
			alert(self.text);
		});
		this.$element.appendTo($('body')); // wolę tak, bardziej spójnie dla mnie
											// tyle że nie bzyka.. nie dodaje nic do strony...
	}
}

var btn1 = new Button('Hello!'); // zaraz .. znaczy w tym momencie MAMY obiekt wirtualny, ale
								// bez repereznetacjiw DOM...
								// czy tylko dla mnie przykład jest absurdalny ?
								// jak dla mnie poniższa metoda
btn1.create();
								// powinna byc de facto częścią działania konstruktora
								// a jak już zdarzenie onClick metodą stworzonego obiektu
								// (choć tu to się już można kłócic)...
								//
								// albo ja w ogole nie kumam zjawiska....
								//
								//
								//... choć z drugiej strony byc moz ekonieczna by była metoda destroy,
								// z usuwaniem reprezentacji ze strony... hmm...
								// może to i mądre...
