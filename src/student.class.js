export default class{
constructor(firstname,lastname,profilImagePath){
    this.id = null;
    this.firstname         = firstname;
    this.lastname          = lastname;
    this.profilImagePath   = profilImagePath || 'img/eleves.jpg';
    
    this.rollState    = '';

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

    updateRollScore(){
        switch(this.rollState) {
            case 'attendance':
                this.attendance   = 1; // nb présence
                this.lateness     = 0; // nb retard
                this.absence      = 0; // nb absence
                break;
            case 'lateness':
                this.attendance   = 0; // nb présence
                this.lateness     = 1; // nb retard
                this.absence      = 0; // nb absence
                break;
            case 'absence':
                this.attendance   = 0; // nb présence
                this.lateness     = 0; // nb retard
                this.absence      = 1; // nb absence
                break;
            default:
                this.attendance   = 0; // nb présence
                this.lateness     = 0; // nb retard
                this.absence      = 0; // nb absence
        }
        this.updateScore();
    }

    updateScore(){
        let s = 0;

        if(this.attendance<0)   this.attendance=0;
        if(this.lateness<0)     this.lateness=0;
        if(this.absence<0)      this.absence=0;
        if(this.contribution<0) this.contribution=0;
        if(this.tablePassage<0) this.tablePassage=0;
        
        s += this.attendance*10;
        s += this.lateness*(-2);
        s += this.absence*(-10);
        s += this.contribution*2;
        s += this.tablePassage*5;

        if(s<0) s=0;

        this.score = s;
    }
}