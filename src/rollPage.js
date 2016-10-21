import $ from 'jquery';
import {now} from './data';
import {STUDENTS} from './data';
import moment from 'moment';

var rollEnd = null;

function init(){
  disp(STUDENTS);
  dispDate();
  clkOnRadioButton(STUDENTS);

  clkOnValidRollButton();
  validTime();
}

function disp(table){

  $('#roll .date').text(now.format('LL'));

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
    console.log('rollEnd (clkOnValidRollButton) = '+rollEnd);
  });
}

function dispDate(){
  setTimeout(function(){
    $('#roll .date').text(now.format('LL'));
    dispDate();
  },60000);
}

// check le moment de la validation de l'appel
// et renvois l'heure de la fin (limite) de l'appel
function getRollEnd(){
  let rollMoment = moment(now),
      limit1  = moment(now),
      limit2  = moment(now);

  limit1 = moment(limit1.hour(13).minute(0).second(0));//Aujourd'hui à 13h00
  limit2 = moment(limit2.hour(15).minute(7).second(0));//Aujourd'hui à 17h00

  if(moment(rollMoment).isBefore(limit1))
  {
    console.log('matin');
    rollEnd = moment(limit1);
  }
  else if(moment(rollMoment).isBefore(limit2))
  {
    console.log('aprèm');
    rollEnd = moment(limit2);
  }
  console.log('rollEnd (getRollEnd) = '+rollEnd);
}

function validTime(){

    setInterval(function(){
      console.log('rollEnd (validTime) = '+rollEnd);
      console.log(now+' > '+rollEnd +' ?');
      console.log(moment(now).isSameOrAfter(rollEnd));
      if(moment(now).isSameOrAfter(rollEnd)){
        console.log('Il est l\'heure !');
        for (let i = STUDENTS.length - 1; i >= 0; i--) {
          let s=STUDENTS[i];
          s.validRollState();
        }
      }
    },1000);
}

export{init};