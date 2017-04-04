$(function(){
	
	function Button(text) {
	  this.text = text || 'Hello';
	}

	Button.prototype = {
	  create: function() {
		var self = this;
		this.$element = $('<button>'); 
		this.$element.text(this.text);
		this.$element.click(function() {
		  alert(self.text);
		});
		this.$element.appendTo('body'); 
	  }
	}

	var myBtn = new Button('hello');
	myBtn.create();
	
	var myBtn1 = new Button('działa!');
	myBtn1.create();

	var myBtn2 = new Button('');
	myBtn2.create();
})