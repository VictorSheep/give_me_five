import Feature from './feature.class';
export default class extends Feature{
  constructor(){
    super('contribution','Contribution', 'hand-paper-o');
  }
  // ajoute un point dans contribution à un student
  // s : instance de Student
  addPoint(s){
    s.contribution ++;
  }
  // retire un point dans contribution à un student
  // s : instance de Student
  removePoint(s){
    s.contribution --;
  }
}