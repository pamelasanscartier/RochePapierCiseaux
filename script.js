//Game

const commencer = document.querySelector('.btn');
commencer.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.boxForm').classList.add('none');
    document.body.style.backgroundColor = 'white';
    const game = new Game();
    }); 

class Game{
    constructor(){ 
        this.listeChoixMain = [
            ['✊', '✋', '✌️'],
            ['✊🏻', '✋🏻', '✌🏻'],
            ['✊🏽', '✋🏽', '✌🏽'],
            ['✊🏿', '✋🏿', '✌🏿']   
        ];
        
        this.afficherNomJoueur();
        this.afficherChoixJoueur();
        //this.choixCPU();
       // this.resultatPartie();
    }

    afficherNomJoueur(){
        const nomJoueur = document.formulaireJeu.nom.value;
        const afficherNom = document.querySelector('.nomJoueur');
        afficherNom.innerHTML = `<span>${nomJoueur}</span>`;
    }

    afficherChoixJoueur(){
        //Choix entre roche, papier ou ciseaux
        const choixOption = document.querySelector('.choixOption');
        const indexChoixOption = choixOption.selectedIndex;
        
        //Choix de la couleur de peau
        const choixCouleur = document.querySelector('[name = choixPeau]:checked').value;

        //Résultat du joueur
        const actionJoueur = this.listeChoixMain[choixCouleur][indexChoixOption];
        
        //Afficher résultat joueur
        const afficherActionJoueur = document.querySelector('.choixJoueur');
        afficherActionJoueur.innerHTML = `<span>${actionJoueur}</span>`;
    }
    
};
