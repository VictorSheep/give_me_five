export default class{
	constructor(firstname,lastname,profilImagePath){
		this.firstname = firstname;
		this.lastname = lastname;
		this.score = 0;
    this.profilImagePath = profilImagePath || 'img/eleves.jpg';
	}
}