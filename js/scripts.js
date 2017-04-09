$(function () {

	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		for (i = 0; i < 10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	/** column **/
	function Column(name) {
		var self = this;

		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {
			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('X');
			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');
			//
			$columnDelete.click(function () {
				self.removeColumn();
			});

			$columnAddCard.click(function () {
				
				rewriteMessagePanel("Podaj nazwę karty:", "newCardName")
				$('#createButton').unbind(); // nie wiem czy tak to sie robi - w każdym razie nie chcem by mi sie "clik'i" "nakładały"
				$('#createButton').on("click", function () {
					var newCardName = $("#newCardName").val();
					if (newCardName) {
						self.addCard(new Card(newCardName));
					}
				});

			})
			//
			$column.append($columnTitle).append($columnDelete).append($columnAddCard).append($columnCardList);
			//
			return $column;
		}

	}

	Column.prototype = {
		addCard: function (card) {
			this.$element.children('ul').append(card.$element);
		},
		removeColumn: function () {
			this.$element.remove();
		}
	};
	/** column end  **/

	/** column card  **/
	function Card(description) {
		var self = this;
		this.id = randomString();
		this.description = description;
		this.$element = createCard(); //

		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('X');
			//
			$cardDelete.click(function () {
				self.removeCard();
			});
			//
			$card.append($cardDelete).append($cardDescription);
			//
			return $card;
		}
	}

	Card.prototype = {
		removeCard: function () {
			this.$element.remove();
		}
	}
	/** card end  **/

	/** board **/
	var board = {
		name: 'Tablica Kanban',
		$element: $('#board .column-container'),
		addColumn: function (column) {
			this.$element.append(column.$element);
			initSortable();
		},
		addColumn: function (column) {
			this.$element.append(column.$element);
			initSortable();
		}
	};
	/** board end **/

	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}

	$('.create-column').click(function () {
		rewriteMessagePanel("Podaj nazwę kolumny:", "newColumnName")

		$('#createButton').unbind();
		$('#createButton').on("click", function () {
			var newColumnName = $("#newColumnName").val();
			if (newColumnName) {
				board.addColumn(new Column(newColumnName));
			}
		});

	});

	// to pewnie powinno być jakąś metoda obiektów albo cos... 
	function rewriteMessagePanel(infotext, varName){
		$('#messageContainer').empty();
		var $panelContentDesc = $('<p>').text(infotext);
		var $panelContentInp = $('<input>').attr("id", varName).attr("type", "text");
		$('#messageContainer').append($panelContentDesc).append($panelContentInp);
		$('#messagePanel').modal();
	}
	//
	//
	//

	// TWORZENIE KOLUMN
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');

	// DODAWANIE KOLUMN DO TABLICY
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// TWORZENIE NOWYCH EGZEMPLARZY KART
	var card1 = new Card('Nowe zadanie');
	var card2 = new Card('Stworzyc tablice kanban');

	// DODAWANIE KART DO KOLUMN
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);

})
