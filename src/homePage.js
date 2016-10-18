import $ from 'jquery';

function init(table){

	let $divButton = $('#home .button:first').detach(); // clone + remove

	for (var i = 0; i < table.length; i++) {
		let b = table[i];

		$divButton.attr('title',b.firstname);
		$divButton.find('img').attr('src',b.icon);
		$divButton.find('p').empty();
		$divButton.find('p').text(b.name);
		$divButton.appendTo('#home .buttons');
		$divButton = $('#home .button:first').clone();
	}
}

export{init};