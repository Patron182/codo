const app = new Vue({
    el: '#app',
    data: {
        mensaje : "no sirve",
        cards : [],
        items: [
            { mensaje: 'Foo' },
            { mensaje: 'Bar' }
          ]
    },
    created() {
        fetch('https://raw.githubusercontent.com/Patron182/beuda_codo/main/cards.json')
        .then(response => response.json())
        .then(data => {
            this.cards = data.cards;

        })
        .catch( error => console.log(error));
    }
});