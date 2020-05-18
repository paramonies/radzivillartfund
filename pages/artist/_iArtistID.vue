<template>
  <b-container>
    <pre>{{ artist }}</pre>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Artist'
    }
  },
  computed: {
    artist({ $store }) {
      return $store.state.artist.item
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('artist/GET_ITEM', { 
      iArtistID: params.iArtistID
    })
  }
}
</script>