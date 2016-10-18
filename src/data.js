import Student from './student.class';
import BtnNav from './btnNav.class';

// Création de tous les étudiants
let STUDENTS = [
  new Student('Mathieu','Vandeville'),
  new Student('Clément','Teboule'),
  new Student('Victor','Moutton'),
  new Student('Félix','Nahon'),
  new Student('Clément','Dussol'),
	new Student('Joel','Alves Canteiro')
];

let BTNNAVS = [
	new BtnNav('élève','img/eleves.jpg'),
	new BtnNav('classement','img/podium.jpg'),
	new BtnNav('appel','img/liste.png')
];

export{STUDENTS,BTNNAVS};