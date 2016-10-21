import $ from 'jquery';
import * as studentsPage from './studentsPage';
import {now} from './data';
import {STUDENTS} from './data';
import moment from 'moment';

var rollEnd = null; //objet(moment.js) correspondan à l'heure de fin de l'appel

function init(){
  disp(STUDENTS);
  refreshDate();
  clkOnRadioButton(STUDENTS);

  clkOnValidRollButton();
  validTime();
}

function disp(table){

  dispDate();

  let $trStudent = $('#roll td:first').parent().detach(); // clone + remove

  for (var i = 0; i < table.length; i++) {
    let s = table[i];

    $trStudent.attr('title',s.firstname);
    $trStudent.attr('id',i);
    $trStudent.children().eq(0).empty();
    $trStudent.children().eq(0).text(s.lastname);
    $trStudent.children().eq(1).empty();
    $trStudent.children().eq(1).text(s.firstname);
    $trStudent.appendTo('#roll tbody');
    $trStudent = $('#roll td:first').parent().clone();
  }
}

function clkOnRadioButton(table){
  $('#roll').on('mousedown','input[type=radio]',function(){
    var sId = $(this).parents('tr').attr('id');
    var status = this.id;

    table[sId].rollState = status;
    table[sId].updateRollScore();
  });
}

function clkOnValidRollButton(){
  $('#valid_roll').on('mousedown',function(){
    getRollEnd();
    $('.valid_col p').removeClass();
  });
}

function dispDate(){
  let midday  = moment(now.hour(13).minute(0).second(0));//Aujourd'hui à 13h00
  let text    = now.format('LL');
  if(moment(now).isBefore(midday)){
    text += ' (matin)';
  }else{      
    text += ' (après-midi)';
  }
  $('#roll .date').text(text);
}

function refreshDate(){
  setInterval(dispDate,6000);
}

// check le moment de la validation de l'appel
// et renvois l'heure de la fin (limite) de l'appel
function getRollEnd(){
  let rollMoment = moment(now),
      limit1  = moment(now),
      limit2  = moment(now);

  limit1 = moment(limit1.hour(13).minute(0).second(0));//Aujourd'hui à 13h00
  limit2 = moment(limit2.hour(17).minute(0).second(0));//Aujourd'hui à 17h00

  if(moment(rollMoment).isBefore(limit1))
  {
    console.log('matin');
    rollEnd = moment(limit1);
  }
  else if(moment(rollMoment).isBefore(limit2))
  {
    console.log('après midi');    
    rollEnd = moment(limit2);
  }
}

function validTime(){

    setInterval(function(){
      
      if(moment(now).isSameOrAfter(rollEnd)){
        for (let i = STUDENTS.length - 1; i >= 0; i--) {
          let s=STUDENTS[i];
          s.validRollState();
          s.updateScore();
        }
        rollEnd = null;
        $('.valid_col>p').addClass('disp_none');
        $('input[type=radio]').prop('checked',false);
        studentsPage.dispCardMin();
      }
    },1000);
}

export{init};