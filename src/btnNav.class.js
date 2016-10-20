import $ from 'jquery';

export default class{
	constructor(name,iconFa,pageID){
		this.name     = name;
		this.iconFa   = iconFa;
    this.pageID   = pageID;
    this.selected = false;
	}
  displayPage(){
    $('#'+this.pageID).removeClass('disabled');
    this.selected = true;
  }
  hidePage(){
    $('#'+this.pageID).addClass('disabled');
    this.selected = false;
  }
  toFaClass(){
    let divfa = 'fa fa-';
    divfa += this.iconFa;
    divfa += ' fa-5x';
    return(divfa);
  }
}