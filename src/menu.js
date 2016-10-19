import $ from 'jquery';

function init(table){
  disp(table);
}

function disp(table){
  let $divButton = $('nav div:first').detach(); // clone + remove

  for (var i = 0; i < table.length; i++) {
    let b = table[i];

    $divButton.attr('title',b.firstname);
    $divButton.find('img').attr('src',b.iconPath);
    $divButton.find('p').empty();
    $divButton.find('p').text(b.name);
    if(i==table.length-1) $divButton.addClass('br_radius');
    $divButton.appendTo('nav');
    $divButton = $('nav div:first').clone();
  }
}
export{init};