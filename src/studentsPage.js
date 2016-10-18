import $ from 'jquery';

function init(table){

  let $divStudent = $('#students .profil_card_min:first').detach(); // clone + remove

  console.log($divStudent);

  for (var i = 0; i < table.length; i++) {
    let s = table[i];

    $divStudent.attr('title',s.firstname);
    $divStudent.find('.profil_image').css('background-image', 'url(../'+s.profilImagePath+')');
    $divStudent.find('p').eq(0).empty;
    $divStudent.find('p').eq(0).text(s.lastname+' '+s.firstname);
    $divStudent.find('p').eq(1).empty;
    $divStudent.find('p').eq(1).text(s.score);
    $divStudent.appendTo('#students .list_profil_card');
    $divStudent = $('#students .profil_card_min:first').clone();
  }
}

export{init};