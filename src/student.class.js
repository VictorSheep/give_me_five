export default class{
constructor(firstname,lastname,score,profilImagePath){
    this.id = null;
    this.firstname         = firstname;
    this.lastname          = lastname;
    this.profilImagePath   = profilImagePath || 'img/eleves.jpg';
    
    this.attendance   = 0; // nb présence
    this.lateness     = 0; // nb retard
    this.absence      = 0; // nb absence
    this.contribution = 0; // nb contribution
    this.tablePassage = 0; // score passage au tableau
    this.score        = 0; // score total
    }

    init(id){
        this.id = id;
    }

    updateScore(){
        let s = 0;

        s += this.attendance*10;
        s += this.lateness*(-2);
        s += this.absence*(-10);
        s += this.contribution*2;
        s += this.tablePassage*5;
        
        if(s<0) s=0;

        this.score = s;
    }
}