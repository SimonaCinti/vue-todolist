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

       indexValue: false

    },
    methods: {
        submit(){
           if (this.userMessage === '') {this.userMessage =''} else {
              this.todo.push(this.userMessage);
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
    },  
        
    
});