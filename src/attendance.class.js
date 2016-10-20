import Feature from './feature.class';
export default class extends Feature{
  constructor(){
    super('attendance','Présence','check',true,'blue');
  }
  // ajoute un point dans attendance à un student
  // s : instance de Student
  addPoint(s){
    s.attendance ++;
  }
  // retire un point dans attendance à un student
  // s : instance de Student
  removePoint(s){
    s.attendance --;
  }
}