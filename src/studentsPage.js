import $ from 'jquery';
import {STUDENTS} from './data';

function init(table){
  disp(table);
  clkOnProfilCardMin();
  clkOnIncreaseItem();
}

function disp(table){

  let $divStudent = $('#students .profil_card_min:first').detach(); // clone + remove

  for (var i = 0; i < table.length; i++) {
    let s = table[i];

    $divStudent.attr('title',s.firstname);
    $divStudent.attr('id',i);
    $divStudent.find('.profil_image').css('background-image', 'url(../'+s.profilImagePath+')');
    $divStudent.find('p').empty();
    $divStudent.find('p').text(s.lastname+' '+s.firstname);
    $divStudent.find('h4').empty();
    $divStudent.find('h4').text(s.score);
    $divStudent.appendTo('#students .list_profil_card');
    $divStudent = $('#students .profil_card_min:first').clone();
  }
}

function clkOnIncreaseItem(){
  $('#students #increase').children().mousedown(function(){
    let profilId = $('#students .flag').attr('id');
    let s = STUDENTS[profilId];

  });
}

function clkOnProfilCardMin(){
  $('#students .profil_card_min').mousedown(function(){
    let profilId = this.id;
    affStudentDetail(profilId);
    
  });
}

/**
* Affiche la carte détaillé d'un étudiant sur la page student
* profilId : id d'une instance de la classe Student
*/
function affStudentDetail(profilId){
  let $divStudent = $('#students div.profil_card_detail') // clone + remove
  let s = STUDENTS[profilId];

  $divStudent.find('.profil_image').css('background-image', 'url(../'+s.profilImagePath+')');
  
  $divStudent.find('.flag').attr('id',profilId);

  $divStudent.find('#rating').children().empty();
  $divStudent.find('#rating #attendance').text(s.attendance);
  $divStudent.find('#rating #lateness').text(s.lateness);
  $divStudent.find('#rating #absence').text(s.absence);
  $divStudent.find('#rating #contribution').text(s.contribution);
  $divStudent.find('#rating #table_passage').text(s.tablePassage);

  $divStudent.find('#pcd_score').empty();
  $divStudent.find('#pcd_score').text(s.score);

  $divStudent.find('#names').children().empty();
  $divStudent.find('#names #firstname').text(s.firstname);
  $divStudent.find('#names #lastname').text(s.lastname);
}

export{init};