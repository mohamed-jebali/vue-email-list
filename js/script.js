
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
        }
    },

    methods:{

    },

    created(){


        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            const result = response.data;
            console.log(result.response);

        });
    }
}).mount('#app');