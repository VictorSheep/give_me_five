import * as homePage from './homePage';
import * as rankPage from './rankPage';
import * as rollPage from './rollPage';
import * as menu from './menu';
import * as studentsPage from './studentsPage';
import * as data from './data';
import moment from 'moment';

function init()
{
  console.log(moment());
  // Attribution des id aux instances de Student
  for (var i = data.STUDENTS.length-1; i>=0; i--) {
    let s = data.STUDENTS[i];
    s.init(i);
  }
	homePage.init(data.BTNNAVS);
	rollPage.init(data.STUDENTS);
	studentsPage.init();
  rankPage.init(data.STUDENTS);
  menu.init(data.BTNNAVS);
}

export{init};