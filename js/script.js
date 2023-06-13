
// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list
// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista usando Vue e Axios come visto a lezione.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
// NOTA BENE:
// Le mail posso anche essere uguali tra di loro, non è necessario verificare che siano diverse


const { createApp } = Vue;

createApp({
    data() {
        return {
            listEmail:[],
            isGenerated: false
        }
    },

    methods:{

    },

    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            const result = response.data;
            console.log(result.response);

            this.listEmail.email = result.response
            let newEmail = result.response;

            for (let i = 0; i < 10; i++) {
                this.listEmail.push(newEmail);
            } 

                if(this.listEmail.length === 0){
                    this.isGenerated = true
                    console.log("Processing");
                }
                else{
                    this.isGenerated = false
                    console.log("Loaded");
                }

        });
    }
}).mount('#app');
