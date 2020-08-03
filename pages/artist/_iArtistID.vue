<template>
  <b-container>
    <pre>{{ artist }}</pre>
  </b-container>
</template>

<script>
export default {
  async asyncData({ store, $axios, params }) {
    await store.dispatch('artist/GET_ITEM_WITH_PICTURE', {
      iArtistID: params.iArtistID
    })
  },
  computed: {
    artist({ $store }) {
      return $store.state.artist.item
    }
  },
  head() {
    return {
      title: 'Artist'
    }
  }
}
</script>
