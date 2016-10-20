export default class{
constructor(firstname,lastname,profilImagePath){
    this.id = null;
    this.firstname         = firstname;
    this.lastname          = lastname;
    this.profilImagePath   = profilImagePath || 'img/eleves.jpg';
    
    this.rollState    = '';

    this.attendance   = {pre:0,val:0}; // nb présence
    this.lateness     = {pre:0,val:0}; // nb retard
    this.absence      = {pre:0,val:0}; // nb absence

    this.contribution = {pre:0,val:0}; // nb contribution
    this.tablePassage = {pre:0,val:0}; // score passage au tableau
    this.score        = 0; // score total
    }

    init(id){
        this.id = id;
    }

    updateRollScore(){
        let att = this.attendance,
            lat = this.lateness,
            abs = this.absence;

        switch(this.rollState) {
            case 'attendance':
                att.pre   = 1; // nb présence
                lat.pre   = 0; // nb retard
                abs.pre   = 0; // nb absence
                break;
            case 'lateness':
                att.pre   = 0; // nb présence
                lat.pre   = 1; // nb retard
                abs.pre   = 0; // nb absence
                break;
            case 'absence':
                att.pre   = 0; // nb présence
                lat.pre   = 0; // nb retard
                abs.pre   = 1; // nb absence
                break;
            default:
                att.pre   = 0; // nb présence
                lat.pre   = 0; // nb retard
                abs.pre   = 0; // nb absence
        }
        this.updateScore();
    }
    validRollState(){
        att.val += att.pre;
        lat.val += lat.pre;
        abs.val += abs.pre;
        att.pre  = 0;
        lat.pre  = 0;
        abs.pre  = 0;
    }
    updateScore(){
        let   s = 0,
            att = this.attendance.val,
            lat = this.lateness.val,
            abs = this.absence.val,
            con = this.contribution.val,
            tab = this.tablePassage.val;

        if(att<0) att=0;
        if(lat<0) lat=0;
        if(abs<0) abs=0;
        if(con<0) con=0;
        if(tab<0) tab=0;
        
        s += att*10;
        s += lat*(-2);
        s += abs*(-10);
        s += con*2;
        s += tab*5;

        if(s<0) s=0;

        this.score = s;
    }
}