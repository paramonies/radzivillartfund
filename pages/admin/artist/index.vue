<template>
  <div>
    <h1>Admin Artist</h1>
    <form @submit.prevent="addArtist">
      <Label id="lastName">Last Name</Label>
      <input
        id="lastName"
        v-model="formdata.sArtistLastName"
        type="text"
        name="lastName"
      />
      <Label id="MiddleName">Middle Name</Label>
      <input
        id="MiddleName"
        v-model="formdata.sArtistMiddleName"
        type="text"
        name="middleName"
      />
      <Label id="firstName">First Name</Label>
      <input
        id="firstName"
        v-model="formdata.sArtistFirstName"
        type="text"
        name="firstName"
      />
      <button type="submit">Create Artist</button>
    </form>
    <ul>
      <li v-for="(artist, artistIndex) in artists" :key="artistIndex">
        <nuxt-link :to="'/admin/artist/' + artist.iArtistID">
          {{
            artist.sArtistLastName +
              ' ' +
              artist.sArtistFirstName +
              ' ' +
              artist.sArtistMiddleName
          }}
        </nuxt-link>
        <button @click="deleteArtist(artist.iArtistID)">Delete</button>
      </li>
    </ul>
    <pre>{{ artists }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, params }) {
    await store.dispatch('artist/GET_LIST')
  },
  data() {
    return {
      formdata: {
        sArtistLastName: '',
        sArtistMiddleName: '',
        sArtistFirstName: ''
      }
    }
  },
  computed: {
    artists({ $store }) {
      return $store.state.artist.list
    }
  },
  methods: {
    async addArtist() {
      await this.$store.dispatch('artist/ADD_ITEM', this.formdata)
    },

    async deleteArtist({ store }, iArtistID) {
      console.log(store, iArtistID)
      await this.$store.dispatch('artist/DELETE_ITEM', { iArtistID })
    }
  },
  head() {
    return {
      title: 'Admin Artist'
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
