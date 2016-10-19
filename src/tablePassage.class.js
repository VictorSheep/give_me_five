import Feature from './feature.class';
export default class extends Feature{
  constructor(){
    super('table_passage','Passage au tableau', 'table');
  }
  // ajoute un point dans tablePassage à un student
  // s : instance de Student
  addPoint(s){
    s.tablePassage ++;
  }
  // retire un point dans tablePassage à un student
  // s : instance de Student
  removePoint(s){
    s.tablePassage --;
  }
}