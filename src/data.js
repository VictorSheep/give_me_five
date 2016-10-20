import Student from './student.class';
import BtnNav from './btnNav.class';
import Attendance from './attendance.class';
import Lateness from './lateness.class';
import Absence from './absence.class';
import Contribution from './contribution.class';
import TablePassage from './tablePassage.class';
import moment from 'moment';

// Moment.js
moment.locale('fr');
var now;
function getNow(){
  now = moment();
}
getNow();
setInterval(getNow,1000);

// Création de tous les étudiants
let STUDENTS = [
  new Student('Mathieu','Vendeville'),
  new Student('Clément','Teboul','img/clementteboul.JPG'),
  new Student('Victor','Moutton'),
  new Student('Félix','Nahon'),
  new Student('Clément','Dussol'),
	new Student('Joel','Alves Canteiro')
];

// Création des 3 bouttons de navigation
let BTNNAVS = [
	new BtnNav('Elèves','users','students'),
	new BtnNav('Classement','list-ol','rank'),
	new BtnNav('Appel','list-ul','roll')
];

// Création des class correspondant aux carracteristiques des élèves
// A modifier ! (n'en faire qu'une seule classe)
let FEATURES = [
  new Attendance(),
  new Lateness(),
  new Absence(),
  new Contribution(),
  new TablePassage()
];

export{STUDENTS,BTNNAVS,FEATURES,now};