<template>
  <div>
    <h1>Admin Artist Details</h1>
    <form @submit.prevent="updateArtist">
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        v-model="formdata.sArtistLastName"
        type="text"
        name="lastName"
      />
      <label for="MiddleName">Middle Name</label>
      <input
        id="MiddleName"
        v-model="formdata.sArtistMiddleName"
        type="text"
        name="middleName"
      />
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        v-model="formdata.sArtistFirstName"
        type="text"
        name="firstName"
      />
      <label for="phone">Phone</label>
      <input
        id="phone"
        v-model="formdata.sArtistPhone"
        type="text"
        name="phone"
      />
      <label for="email">Email</label>
      <input
        id="email"
        v-model="formdata.sArtistEmail"
        type="text"
        name="email"
      />
      <label for="birthday">Birthday</label>
      <input
        id="birthday"
        v-model="formdata.dArtistBirthday"
        type="date"
        name="birthday"
      />
      <label for="avatar">Avatar</label>
      <input
        id="avatar"
        v-model="formdata.sArtistAvatar"
        type="text"
        name="avatar"
      />
      <label for="active">Active</label>
      <input
        id="active"
        v-model="formdata.iActive"
        type="checkbox"
        name="active"
      />

      <button type="submit">Save</button>
      <pre>{{ artist }}</pre>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, params }) {
    await store.dispatch('artist/GET_ITEM', {
      iArtistID: params.iArtistID
    })
  },
  data() {
    return {
      formdata: {
        iArtistID: '',
        sArtistLastName: '',
        sArtistMiddleName: '',
        sArtistFirstName: ''
      }
    }
  },
  computed: {
    // artist({ $store }) {
    //   this.formdata = $store.state.artist.item
    //   return $store.state.artist.item
    // }
  },
  methods: {
    updateArtist({ params }) {
      console.log('Update Artist ', params)
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
</style>
