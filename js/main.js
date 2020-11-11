console.log('hello', Vue);

const app = new Vue ({
    el: '#app',

    data: {
        todo: [
            {
                text:'Studiare',
                doneCheck: '',
            },

            {
                text:'Annaffiare le piante',
                doneCheck: '',
            },
            {
                text:'Capire come fare a scriptare una todolist',
                doneCheck: '',
            },
        ],

       userMessage:null,

       indexValue: false

    },
    methods: {
        submit(){
           if (this.userMessage.trim() === '') {this.userMessage =''} else {
              this.todo.push({
                  text:this.userMessage,
                  doneCheck:'',});
            this.userMessage = '' 
           } 
            if (this.todo.length !== 0) {
                this.indexValue = false
            }
           
        },
        remove(index) {
            this.todo.splice(index, 1);
            if(this.todo.length == 0){
              this.indexValue = true
            }
        },

        done(index) {
            if (this.todo[index].doneCheck === ''){
                this.todo[index].doneCheck = 'line-done'
            } else {
                this.todo[index].doneCheck = ''
            }
        }
    },  
        
    
});