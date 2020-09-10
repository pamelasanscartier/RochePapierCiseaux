class Game{
    constructor(){
        this.listeChoix = [
            ['✊', '✋', '✌️'],
            ['✊🏻', '✋🏻', '✌🏻'],
            ['✊🏽', '✋🏽', '✌🏽'],
            ['✊🏿', '✋🏿', '✌🏿']   
        ];
        this.jouer = document.querySelector('.btn')
        this.jouer.addEventListener('click', () => this.start())
        
        this.rejouer = document.querySelector('.btnRejouer')
        this.rejouer.addEventListener('click', () => this.replay())
        
    };

    start(){
        const jouer = document.querySelector('.btn');
        jouer.addEventListener('click', function(e){
            
            e.preventDefault();
            console.log('chat')
            document.querySelector('.boxForm').classList.add('none');
            document.body.style.backgroundColor = 'white';
        });
    }

    replay(){

    };
    //Joueur

    //CPU

};

const game = new Game()