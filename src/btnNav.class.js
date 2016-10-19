import $ from 'jquery';

export default class{
	constructor(name,iconPath,pageID){
		this.name     = name;
		this.iconPath = iconPath;
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
}