import $ from 'jquery';
import {BTNNAVS} from './data';
import {now} from './data';

function init(){
  disp();
  on_mousedown();
}

function disp(){
  console.log(now.format('LLLL'));
  let $divButton = $('nav .nav_button:first').detach(); // clone + remove

  for (var i = 0; i < BTNNAVS.length; i++) {
    let b = BTNNAVS[i];

    $divButton.attr('title',b.firstname);
    $divButton.attr('id',i); // id pour lier interfaces / instances
    $divButton.find('h6').empty();
    $divButton.find('h6').text(b.name);
    $divButton.appendTo('nav');
    $divButton = $('nav .nav_button:first').clone();
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