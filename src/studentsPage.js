import $ from 'jquery';

function init(table){
  disp(table);
}

function disp(table){

  let $divStudent = $('#students .profil_card_min:first').detach(); // clone + remove

  for (var i = 0; i < table.length; i++) {
    let s = table[i];

    $divStudent.attr('title',s.firstname);
    $divStudent.find('.profil_image').css('background-image', 'url(../'+s.profilImagePath+')');
    $divStudent.find('p').empty;
    $divStudent.find('p').text(s.lastname+' '+s.firstname);
    $divStudent.find('h4').empty;
    $divStudent.find('h4').text(s.score);
    $divStudent.appendTo('#students .list_profil_card');
    $divStudent = $('#students .profil_card_min:first').clone();
  }
}

export{init};