const { createApp } = Vue

createApp({
  data() {
    return {
      newTask:'',
       
      
      list : [
        {
          text : 'fare i compiti',
          done : true
        },

         {
          text : 'Andare a fare la spesa',
          done : true
        },

         {
          text : 'Buttarsi giù da un burrone',
          done : false
        }
      ]
    }
   
  },
  methods : {
    checkDone(tasklist){
      if (tasklist.done){
        return 'strike'
      }else{
        return ''
      }
    },
    
    removeItem(index){
    this.list.splice(index , 1)
    console.log(index);
    },

    addTask(){
      const newText = {
        text: this.newTask,
      };
      this.list.push(newText)
      this.newTask ='';
    }

  }
}).mount('#app')