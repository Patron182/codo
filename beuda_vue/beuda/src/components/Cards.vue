<template>
  <div class="cards">
    <b-container>
        <div class="mt-4 mb-4">
            <h4>Tus Tarjetas</h4>
            <div class="row">
                <div v-for="(card, index) in cards"  v-bind:key="index" class="col-sm-6 col-md-4 mt-3 mb-3">
                  <b-card class="text-center" :title="card.word">
                       <b-card-text>

                        <b-input-group class="mb-3">
                            <b-form-input type="text" class="form-control" placeholder="Significado..." onkeyup="validateEnter()" :id="'input'+index"></b-form-input>
                            <b-input-group-append>
                              <b-input-group-text><i class="fas fa-angle-right"></i>></b-input-group-text>
                            </b-input-group-append>
                          </b-input-group>
                            <p class="card-text collapse" :id="'card'+index">{{card.meaning}}</p>
                            <button class="btn btn-outline-danger" :id="'reveal'+index" :data-target="'#card'+index"
                                data-toggle="collapse">Revelar</button>
                      </b-card-text>
                  </b-card>
                </div>
            </div>
        </div>
    </b-container>
  </div>

</template>

<script>
export default {
  name: 'Cards',
  data: function () {
    return {
      cards: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      fetch("https://raw.githubusercontent.com/Patron182/beuda_codo/main/cards.json")
      .then(response => response.json())
      .then(json => this.cards = json.cards)
      .catch(error => console.log(error));
    }
  }
}
</script>