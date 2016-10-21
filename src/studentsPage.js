import $ from 'jquery';
import * as homePage from './homePage';
import * as rankPage from './rankPage';
import {STUDENTS} from './data';
import {FEATURES} from './data';

function init(){
  dispCardMin();
  dispFeatures();
  clkOnProfilCardMin();
  clkOnIncreaseItem();
  clkOnDecreaseItem();
  endInit();
}

function dispCardMin(){

  let $divStudent = $('#students .profil_card_min:first').clone();
  $('#students .profil_card_min').parent().empty();

  for (var i = 0; i < STUDENTS.length; i++) {
    let s = STUDENTS[i];

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

function dispFeatures(){
  let $divFeatIcon  = $('#students .icons_features').children().eq(0).detach(); // clone + remove
  let $divFeatNb    = $('#students #rating').children().eq(0).detach();
  let $divFeatInc   = $('#students #increase').children().eq(0).detach();
  let $divFeatDec   = $('#students #decrease').children().eq(0).detach();

  $('#students .icons_features').empty();
  $('#students #rating').empty();
  $('#students #increase').empty();
  $('#students #decrease').empty();

  for (var i = 0; i < FEATURES.length; i++) {
    let f = FEATURES[i];

    $divFeatIcon.attr('title',f.title);
    $divFeatIcon.attr('id',i);
    $divFeatIcon.removeClass();
    $divFeatIcon.addClass(f.color);
    $divFeatIcon.children().removeClass();
    $divFeatIcon.children().addClass(f.toFaClass());
    $divFeatIcon.appendTo('#students .icons_features');
    $divFeatIcon  = $('#students .profil_card_detail h5:first').clone();
  
    $divFeatNb.attr('title',f.title);
    $divFeatNb.attr('id',f.name);
    $divFeatNb.appendTo('#students #rating');
    $divFeatNb.removeClass();
    $divFeatNb.addClass(f.color);
    $divFeatNb    = $('#students #rating h5:first').clone();

    // increase et decrease boutons
    if(f.roll)
    {
      $divFeatInc.html('<br/>');
      $divFeatDec.html('<br/>');
    }
    else
    {
      $divFeatInc.attr('title',f.title);
      $divFeatInc.attr('id',i);
      $divFeatInc.html('<i class="button fa fa-plus" aria-hidden="true"></i>');

      $divFeatDec.attr('title',f.title);
      $divFeatDec.attr('id',i);
      $divFeatDec.html('<i class="button fa fa-minus" aria-hidden="true"></i>');
    }
    $divFeatInc.appendTo('#students #increase');
    $divFeatInc   = $('#students #increase').children().eq(0).clone();
    $divFeatDec.appendTo('#students #decrease');
    $divFeatDec   = $('#students #decrease').children().eq(0).clone();
    
  }
}

function clkOnIncreaseItem(){
  $('#students #increase').children().mousedown(function(){
    let profilId = $('#students .flag').attr('id');
    let featurID = this.id;
    let s = STUDENTS[profilId];
    let f = FEATURES[featurID];
    f.addPoint(s);
    s.updateScore();
    rankPage.init();
    dispCardMin();

    affStudentDetail(profilId);
  });
}

function clkOnDecreaseItem(){
  $('#students #decrease').children().mousedown(function(){
    let profilId = $('#students .flag').attr('id');
    let featurID = this.id;
    let s = STUDENTS[profilId];
    let f = FEATURES[featurID];
    f.removePoint(s);
    s.updateScore();
    rankPage.init();
    dispCardMin();

    affStudentDetail(profilId);
  });
}

function clkOnProfilCardMin(){
  $('#students').on('mousedown','.profil_card_min',function(){
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
  $divStudent.find('#rating #attendance').text(s.attendance.val);
  $divStudent.find('#rating #lateness').text(s.lateness.val);
  $divStudent.find('#rating #absence').text(s.absence.val);
  $divStudent.find('#rating #contribution').text(s.contribution.val);
  $divStudent.find('#rating #table_passage').text(s.tablePassage.val);

  $divStudent.find('#pcd_score').empty();
  $divStudent.find('#pcd_score').text(s.score);

  $divStudent.find('#names').children().empty();
  $divStudent.find('#names #firstname').text(s.firstname);
  $divStudent.find('#names #lastname').text(s.lastname);
}
function endInit(){
  affStudentDetail(0);
}
export{init,dispCardMin};