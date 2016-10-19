import * as homePage from './homePage';
import * as rankPage from './rankPage';
import * as rollPage from './rollPage';
import * as menu from './menu';
import * as studentsPage from './studentsPage';
import * as data from './data';

function init()
{
  // Attribution des id aux instances de Student
  for (var i = data.STUDENTS.length-1; i>=0; i--) {
    let s = data.STUDENTS[i];
    s.init(i);

    console.log(s.id);
  }
	homePage.init(data.BTNNAVS);
	rollPage.init(data.STUDENTS);
	studentsPage.init(data.STUDENTS);
  rankPage.init(data.STUDENTS);
  menu.init(data.BTNNAVS);
}

export{init};