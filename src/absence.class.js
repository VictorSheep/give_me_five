import Feature from './feature.class';
export default class extends Feature{
  constructor(){
    super('absence','Absence','times',true,'orange');
  }
  // ajoute un point dans absence à un student
  // s : instance de Student
  addPoint(s){
    s.absence ++;
  }
  // retire un point dans absence à un student
  // s : instance de Student
  removePoint(s){
    s.absence --;
  }
}