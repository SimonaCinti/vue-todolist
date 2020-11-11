console.log('hello', Vue);

const app = new Vue ({
    el: '#app',

    data: {
        todo: [
            {
                text:'Per aggiungere un testo, scrivi nella barra e premi sulla tastiera invio od il tasto Submit',
                doneCheck: null,
            }, 
            
            {
                text:'Premi sul testo quando hai completato la tua task',
                doneCheck: null,
            },

            {
                text:'Per cancellare il testo, premi sul cestino',
                doneCheck: null,
            },

            {
                text:'Buon lavoro!',
                doneCheck: null,
            },
        ],

       userMessage:'',

    },
    methods: {
        submit(){
           if (this.userMessage.trim() !== ''){
              this.todo.push({
                  text:this.userMessage,
                  doneCheck:null,});
            this.userMessage = '' 
           }           
        },
        remove(index) {
            this.todo.splice(index, 1);
        },

        done(index) {
            if (this.todo[index].doneCheck === null){
                this.todo[index].doneCheck = 'line-done'
            } else {
                this.todo[index].doneCheck = null
            }
        }
    },  
        
    
});