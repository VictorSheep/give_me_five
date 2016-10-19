import $ from 'jquery';

function init(table){
	disp(table);
}

function disp(table){
	let $divButton = $('#home .button:first').detach(); // clone + remove

	for (var i = 0; i < table.length; i++) {
		let b = table[i];

		$divButton.attr('title',b.firstname);
    $divButton.attr('id',i); // id pour lier interfaces / instances
		$divButton.find('img').attr('src',b.iconPath);
		$divButton.find('p').empty();
		$divButton.find('p').text(b.name);
		$divButton.appendTo('#home .buttons');
		$divButton = $('#home .button:first').clone();
	}
}
export{init};