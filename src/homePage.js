import $ from 'jquery';
import {BTNNAVS} from './data';

function init(){
	disp(BTNNAVS);
  on_mousedown();
}

function disp(table){
	let $divButton = $('#home .button:first').detach(); // clone + remove

	for (var i = 0; i < table.length; i++) {
		let b = table[i];

		$divButton.attr('title',b.firstname);
	  $divButton.attr('id',i); // id pour lier interfaces / instances
		$divButton.find('i').removeClass();
    $divButton.find('i').addClass(b.toFaClass())
		$divButton.find('p').empty();
		$divButton.find('p').text(b.name);
		$divButton.appendTo('#home .buttons');
		$divButton = $('#home .button:first').clone();
	}
}
function on_mousedown(){
  $('#home .button').mousedown(function(){
    let navId = this.id;

		$('#home').addClass('disabled');
		$('nav').removeClass('disabled');
    BTNNAVS[navId].displayPage();

  });
}
export{init};