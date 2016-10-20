import $ from 'jquery';
import {now} from './data';
import {STUDENTS} from './data';

function init(){
  disp(STUDENTS);
  clkOnRadioButton(STUDENTS);
  dispDate();
  setInterval(validTime,1000);
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

function dispDate(){
  setTimeout(function(){
    $('#roll .date').text(now.format('LL'));
    dispDate();
  },60000);
}

function validTime(){

  if( '13:00:00'==(now.format('LTS'))
    ||'17:00:00'==(now.format('LTS'))){
    console.log('Il est l\'heure !');
    for (var i = STUDENTS.length - 1; i >= 0; i--) {
      let s=STUDENTS[i];
      s.validRollState();
    }
  }
}

export{init};