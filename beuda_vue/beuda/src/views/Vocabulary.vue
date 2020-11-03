<template>
  <div class="vocabulary">
    <h1>Tarjetas</h1>
    <Cards data.cards=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Cards.vue'

export default {
  name: 'Vocabulary',
  components: {
    Cards
  }
}
</script>
