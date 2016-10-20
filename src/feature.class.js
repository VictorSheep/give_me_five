export default class{
  constructor(name,title,iconFa,roll,color){
    this.name    = name;
    this.title   = title;
    this.iconFa  = iconFa;
    this.roll    = roll;
    this.color   = color || 'black';
  }
  toFaClass(){
    let divfa = 'fa fa-';
    divfa += this.iconFa;
    return(divfa);
  }
}