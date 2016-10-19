import $ from 'jquery';
import {BTNNAVS} from './data';

function init(table){
  disp(table);
  on_mousedown();
}

function disp(table){
  let $divButton = $('nav div:first').detach(); // clone + remove

  for (var i = 0; i < table.length; i++) {
    let b = table[i];

    $divButton.attr('title',b.firstname);
    $divButton.attr('id',i); // id pour lier interfaces / instances
    $divButton.find('img').attr('src',b.iconPath);
    $divButton.find('p').empty();
    $divButton.find('p').text(b.name);
    if(i==table.length-1) $divButton.addClass('br_radius');
    $divButton.appendTo('nav');
    $divButton = $('nav div:first').clone();
  }
}

function on_mousedown(){
  $('nav div').mousedown(function(){
    let navId = this.id;
    
    for (var i=BTNNAVS.length-1; i>=0; i--) {
      let b = BTNNAVS[i];
      if(b.selected) b.hidePage();
    }

    BTNNAVS[navId].displayPage();

  })
}



export{init};