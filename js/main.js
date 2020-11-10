console.log('hello', Vue);

const app = new Vue ({
    el: '#app',

    data: {
        todo: [
            'Studiare',
            'Annaffiare le piante',
            'Capire come fare a scriptare una todolist',
        ],

       userMessage:'',

    },

    methods: {
        submit(){
           if (this.userMessage === '') {this.userMessage =''} else {
              this.todo.push(this.userMessage);
            this.userMessage = '' 
           } 
           
        }
    },    
});