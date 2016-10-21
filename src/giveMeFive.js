import * as homePage from './homePage';
import * as rankPage from './rankPage';
import * as rollPage from './rollPage';
import * as menu from './menu';
import * as studentsPage from './studentsPage';
import {STUDENTS} from './data';

function init()
{
  // Attribution des id aux instances de Student
  for (var i = STUDENTS.length-1; i>=0; i--) {
    let s = STUDENTS[i];
    s.init(i);
  }
	homePage.init();
	rollPage.init();
	studentsPage.init();
  rankPage.init();
  menu.init();
}

export{init};