export default class{
	constructor(firstname,lastname,score,profilImagePath){
		this.firstname = firstname;
		this.lastname = lastname;
		this.score = score;
    this.profilImagePath = profilImagePath || 'img/eleves.jpg';
	}
}