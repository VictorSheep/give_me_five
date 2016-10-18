import * as homePage from './homePage';
import * as rollPage from './rollPage';
import * as studentsPage from './studentsPage';
import * as data from './data';

function init()
{
	homePage.init(data.BTNNAVS);
	rollPage.init(data.STUDENTS);
	studentsPage.init(data.STUDENTS);
  //rankPage.init(BTNNAVS, STUDENTS);
}

export{init};