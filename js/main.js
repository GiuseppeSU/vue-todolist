const { createApp } = Vue

createApp({
  data() {
    return {
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
    checkDone(){
      if (list == true){
        
      }

    }

  }
}).mount('#app')