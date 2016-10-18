import $ from 'jquery';

function init(table){

  let $trStudent = $('#roll td:first').parent().detach(); // clone + remove

  for (var i = 0; i < table.length; i++) {
    let s = table[i];

    $trStudent.attr('title',s.firstname);
    $trStudent.children().eq(0).empty();
    $trStudent.children().eq(0).text(table[i].lastname);
    $trStudent.children().eq(1).empty();
    $trStudent.children().eq(1).text(table[i].firstname);
    $trStudent.appendTo('#roll tbody');
    $trStudent = $('#roll td:first').parent().clone();
  }
}

export{init};