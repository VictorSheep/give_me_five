import Student from './student.class';
import BtnNav from './btnNav.class';
import Attendance from './attendance.class';
import Lateness from './lateness.class';
import Absence from './absence.class';
import Contribution from './contribution.class';
import TablePassage from './tablePassage.class';


// Création de tous les étudiants
var STUDENTS = [
  new Student('Mathieu','Vendeville'),
  new Student('Clément','Teboul','img/clementteboul.JPG'),
  new Student('Victor','Moutton'),
  new Student('Félix','Nahon'),
  new Student('Clément','Dussol'),
	new Student('Joel','Alves Canteiro')
];

let BTNNAVS = [
	new BtnNav('élève','img/eleves.jpg','students'),
	new BtnNav('classement','img/podium.jpg','rank'),
	new BtnNav('appel','img/liste.png','roll')
];

// A modifier ! (n'en faire qu'une seule classe)
let FEATURES = [
  new Attendance(),
  new Lateness(),
  new Absence(),
  new Contribution(),
  new TablePassage()
];

export{STUDENTS,BTNNAVS,FEATURES};