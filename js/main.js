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
    }

  }
}).mount('#app')