<template>
  <b-container>
    <h1>Artist</h1>
    <ul>
      <li v-for="(artist, artistIndex) in artists" :key="artistIndex">
        <nuxt-link :to="'/artist/' + artist.iArtistID">{{ artist.sArtistFirstName }}</nuxt-link>
      </li>
    </ul>
    <pre>{{ artists }}</pre>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Artists'
    }
  },
  computed: {
    artists({ $store }) {
      return $store.state.artist.list
    }
  },
  async asyncData({ store, $axios, params }) {
    await store.dispatch('artist/GET_LIST')
  }
}
</script>