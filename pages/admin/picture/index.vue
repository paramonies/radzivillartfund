<template>
  <div>
    <h1>Admin Picture</h1>
    <form @submit.prevent="createPicture">
      <label for="pictureName">Picture Name</label>
      <input
        id="pictureName"
        v-model="formdata.sPictureName"
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

      <button type="submit">Create</button>
    </form>
    <ul>
      <li v-for="(picture, pictureIndex) in pictures" :key="pictureIndex">
        <nuxt-link :to="'/admin/picture/' + picture.iPictureID">
          {{
            picture.sPictureName +
              ' ' +
              picture.iPictureID +
              ' ' +
              picture.iArtistID
          }}
        </nuxt-link>
        <button @click="deletePicture(picture.iPictureID)">Delete</button>
      </li>
    </ul>
    <pre>{{ pictures }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, params }) {
    await store.dispatch('picture/GET_LIST')
    await store.dispatch('artist/GET_LIST')
  },
  data() {
    return {
      formdata: {}
    }
  },
  computed: {
    pictures({ $store }) {
      return $store.state.picture.list
    },
    artists({ $store }) {
      return $store.state.artist.list
    }
  },
  methods: {
    async createPicture() {
      await this.$store.dispatch('picture/ADD_ITEM', this.formdata)
    },
    async deletePicture(iPictureID) {
      // console.log('deletePicture ', iPictureID)
      await this.$store.dispatch('picture/DELETE_ITEM', { iPictureID })
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

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 500px;
}

li {
  margin: 5px;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
}
</style>
