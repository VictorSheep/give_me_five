import $ from 'jquery';

function init(table){
  disp(table);
  clkOnRadioButton(table);
}

function disp(table){

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

export{init};