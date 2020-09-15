//Game

//Cacher le div partie.
document.querySelector('.btnRejouer').classList.add('none');
document.querySelector('.partie').style.display = 'none';

//Bouton jouer
const commencer = document.querySelector('.btn');
commencer.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.boxForm').classList.add('none');
    document.querySelector('.partie').style.display = 'flex';
    document.querySelector('.btnRejouer').classList.remove('none');
    document.body.style.backgroundColor = 'white';   
    const game = new Game();
}); 

//Bouton rejouer
const rejouer = document.querySelector('.btnRejouer');
rejouer.addEventListener('click', function(){
    document.querySelector('.boxForm').classList.remove('none');
    document.body.style.backgroundColor = '#272635';
    document.querySelector('.partie').style.display = 'none';
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
        this.afficherChoixCpu();
        this.afficherResultatPartie();
    }

    afficherNomJoueur(){
        //Aller chercher le nom 
        const nomJoueur = document.formulaireJeu.nom.value;
        const afficherNom = document.querySelector('.nomJoueur');
        //Afficher le nom
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

    afficherChoixCpu(){
         //Choix de la couleur de peau
        const randomChoixCouleur = Math.round(Math.random() * 3);
        const couleurCpu = this.listeChoixMain[randomChoixCouleur];

        //Choix entre roche, papier ou ciseaux
        this.randomChoixOption = Math.round(Math.random() * 2);
        
        //Résultat du CPU
        const actionCpu = couleurCpu[this.randomChoixOption];
        
        //Afficher résultat CPU
        const afficherActionCpu = document.querySelector('.choixCpu');
        afficherActionCpu.innerHTML = `<span>${actionCpu}</span>`;
        }
    
    afficherResultatPartie(){
        const coteJoueur = document.querySelector('.joueur');
        const coteCpu = document.querySelector('.cpu');
        const resultat = document.querySelector('.score');

        //Choix pour le joueur
        const choixOption = document.querySelector('.choixOption');
        const indexChoixOption = choixOption.selectedIndex;
        
        //Égalité
        if(indexChoixOption == this.randomChoixOption){
            coteJoueur.style.setProperty('background-color', '#3F88C5');
            coteCpu.style.setProperty('background-color', '#3F88C5');
            resultat.innerHTML = "<span>MATCH NUL</span>"
        }

        //Défaite 
        else if(indexChoixOption == 0 && this.randomChoixOption == 1 ||
        indexChoixOption == 1 && this.randomChoixOption == 2 ||
        indexChoixOption == 2 && this.randomChoixOption == 0){
            coteJoueur.style.setProperty('background-color', '#D16D82');
            coteCpu.style.setProperty('background-color', '#7FD8BE');
            resultat.innerHTML = "<span>DÉFAITE</span>"    
        }

        //Victoire
        else{
            coteJoueur.style.setProperty('background-color', '#7FD8BE');
            coteCpu.style.setProperty('background-color', '#D16D82');
            resultat.innerHTML = "<span>VICTOIRE!!</span>"  
        }
    }

};

