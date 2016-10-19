import $ from 'jquery';
import {compareNombres} from './additionalFunctions';

function init(table){
  let sortTable = sortStudents(table);
  disp(sortTable);
}

function sortStudents(table){
  let studentTable = table.slice(0);
  let sortStudent = [];
  let sortStudentScore = [];

  for (let i = 0; i < studentTable.length; i++) {
    let s = studentTable[i]; //student
    sortStudentScore.push(s.score);
  }
  sortStudentScore.sort(compareNombres); //tris les scores du plus petit au plus grand

  for (let i = sortStudentScore.length-1; i >= 0; i--) {
    let score = sortStudentScore[i];
    for (let j = 0; j < studentTable.length; j++) {
      let s = studentTable[j]; // student
      if(s.score==score)
      {
        let t = studentTable.splice(j,1);
        sortStudent.push(t[0]);
      }
    }
  }
  console.log(table);
  return(sortStudent);
}

function disp(table){

  let r = 0; // rank
  let $divStudent = $('#rank td:first').parent().detach(); // clone + remove
  
  for (var i = 0; i < table.length; i++) {
    let s = table[i]; // student
    let sp = $divStudent.children().eq(1).text(); // score précédent
    
    // on incrémente le rank seulement si le score
    // est différent du précédent
    if(s.score!=sp) r++;

    $divStudent.attr('title',s.firstname);
    $divStudent.children().eq(0).empty();
    $divStudent.children().eq(0).text(r);
    $divStudent.children().eq(1).empty();
    $divStudent.children().eq(1).text(s.score);
    $divStudent.children().eq(2).empty();
    $divStudent.children().eq(2).text(s.lastname);
    $divStudent.children().eq(3).empty();
    $divStudent.children().eq(3).text(s.firstname);
    $divStudent.appendTo('#rank tbody');
    $divStudent = $('#rank td:first').parent().clone();

  }
}

export{init};