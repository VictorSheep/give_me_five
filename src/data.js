import Student from './student.class';
import BtnNav from './btnNav.class';

// Création de tous les étudiants
let STUDENTS = [
  new Student('Mathieu','Vandeville',50),
  new Student('Clément','Teboule',60,'img/clementteboul.JPG'),
  new Student('Victor','Moutton',30),
  new Student('Félix','Nahon',40),
  new Student('Clément','Dussol',5),
	new Student('Joel','Alves Canteiro',60)
];

let BTNNAVS = [
	new BtnNav('élève','img/eleves.jpg'),
	new BtnNav('classement','img/podium.jpg'),
	new BtnNav('appel','img/liste.png')
];

export{STUDENTS,BTNNAVS};