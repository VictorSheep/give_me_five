import $ from 'jquery';

function init(table){

	let $divButton = $('#home .button:first').detach(); // clone + remove

	console.log($divButton);

	for (var i = 0; i < table.length; i++) {
		console.log(i);
		$divButton.attr('title',table[i].name);
		$divButton.find('img').attr('src',table[i].icon);
		$divButton.find('p').empty();
		$divButton.find('p').text(table[i].name);
		$divButton.appendTo('#home .buttons');
		$divButton = $('#home .button:first').clone();
	}
}

export{init};