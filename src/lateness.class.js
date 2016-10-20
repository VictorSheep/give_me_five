import Feature from './feature.class';
export default class extends Feature{
  constructor(){
    super('lateness','Retard','clock-o',true);
  }
  // ajoute un point dans lateness à un student
  // s : instance de Student
  addPoint(s){
    s.lateness.val ++;
  }
  // retire un point dans lateness à un student
  // s : instance de Student
  removePoint(s){
    s.lateness.val --;
  }
}