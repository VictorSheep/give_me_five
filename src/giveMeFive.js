import * as homePage from './homePage';
import * as rollPage from './rollPage';
import * as data from './data';

function init()
{

	homePage.init(data.BTNNAVS);
	rollPage.init(data.STUDENTS);
	//rankPage.init(BTNNAVS, STUDENTS);
	//studentsPage.init(BTNNAVS, STUDENTS);
}

export{init};