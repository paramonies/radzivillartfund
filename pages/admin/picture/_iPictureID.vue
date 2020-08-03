<template>
  <div>
    <h1>Admin Picture Details</h1>
    <form @submit.prevent="updateArtist">
      <span>Picture ID {{ formdata.iPictureID }}</span
      ><br />

      <label for="pictureName">Picture Name</label>
      <input
        id="pictureName"
        v-model="sPictureName"
        type="text"
        name="pictureName"
      />

      <span>Belong to: </span>
      <select v-model="formdata.iArtistID">
        <option
          v-for="artist in artists"
          :key="artist.iArtistID"
          :value="artist.iArtistID"
          >{{ artist.sArtistLastName }}</option
        > </select
      ><br />

      <button type="submit">Save</button>

      <pre>{{ picture }}</pre>
      <pre>{{ artists }}</pre>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, params }) {
    await store.dispatch('picture/GET_ITEM', {
      iPictureID: params.iPictureID
    })
    await store.dispatch('artist/GET_LIST')
  },
  data() {
    return {
      formdata: {
        // sPictureName: ''
      }
    }
  },
  computed: {
    // picture({ $store }) {
    //   this.formdata = $store.state.picture.item
    //   return $store.state.picture.item
    // },
    artists({ $store }) {
      return $store.state.artist.list
    },
    sPictureName: {
      get() {
        return this.$store.state.picture.item.sPictureName
      },
      set(sPictureName) {
        this.$store.dispatch('picture/UPDATE_sPictureName', sPictureName)
      }
    }
  },
  methods: {
    updateArtist({ params }) {
      console.log('Update Picture ', params)
    }
  },
  head() {
    return {
      title: 'Admin Picture'
    }
  }
}
</script>

<style scoped>
input {
  display: block;
}
</style>
