import Student from './student.class';
import BtnNav from './btnNav.class';
import * as homePage from './homePage';

function init()
{
	// Création de tous les étudiants
	let STUDENTS = [
		new Student('Mathieu','Vandeville'),
		new Student('Joel','Alves Canteiro')
	];
	let BTNNAVS = [
		new BtnNav('élève','img/eleves.jpg'),
		new BtnNav('classement','img/podium.jpg'),
		new BtnNav('appel','img/liste.png')
	];

	homePage.init(BTNNAVS);
	//rollPage.init(BTNNAVS, STUDENTS);
	//rankPage.init(BTNNAVS, STUDENTS);
	//studentsPage.init(BTNNAVS, STUDENTS);
}

export{init};