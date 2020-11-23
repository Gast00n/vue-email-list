const app = new Vue({
    el: '#app',
    data: {
        counter: 10,
        mails: [],
    },
    created() {
    
        const self = this;

        // Generazione ciclo FOR per riempire l'array
        for (i = 0; i < self.counter; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {    
                    self.mails.push(response.data.response);
            })
            .catch(function (error) {
                alert(error);
            })
        }
    }
}); 