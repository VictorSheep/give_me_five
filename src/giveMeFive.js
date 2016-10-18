import * as homePage from './homePage';
import * as data from './data';

console.log(data);

function init()
{
	// Création de tous les étudiants

	homePage.init(data.BTNNAVS);
	//rollPage.init(BTNNAVS, STUDENTS);
	//rankPage.init(BTNNAVS, STUDENTS);
	//studentsPage.init(BTNNAVS, STUDENTS);
}

export{init};