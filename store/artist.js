const state = () => ({
  list: [],
  item: {}
})

const getters = {}

const mutations = {
  SET_LIST(state, artists) {
    state.list = artists
  },
  SET_ITEM(state, artist) {
    state.item = artist
  },
  DELETE_ITEM(state, artist) {
    const index = state.list.findIndex(
      (item) => item.iArtistID === artist.iArtistID
    )
    state.list.splice(index, 1)
  },
  ADD_ITEM(state, artist) {
    state.list.push(artist)
  }
}

const actions = {
  async GET_LIST({ state, commit }) {
    const artists = await this.$axios.$post('/api/artist/list')
    commit('SET_LIST', artists)
  },
  async GET_LIST_WITH_PICTURE({ state, commit }) {
    const artists = await this.$axios.$post('/api/artist/list-with-picture')
    commit('SET_LIST', artists)
  },
  async GET_ITEM({ state, commit }, { iArtistID }) {
    const artist = await this.$axios.$post('/api/artist/item', { iArtistID })
    commit('SET_ITEM', artist)
  },
  async GET_ITEM_WITH_PICTURE({ state, commit }, { iArtistID }) {
    const artist = await this.$axios.$post('/api/artist/item-with-picture', {
      iArtistID
    })
    commit('SET_ITEM', artist)
  },
  async DELETE_ITEM({ state, commit }, { iArtistID }) {
    const artist = await this.$axios.$post('/api/artist/delete', { iArtistID })
    commit('DELETE_ITEM', artist)
  },
  async ADD_ITEM({ state, commit }, formdata) {
    console.log('!!! ', formdata)
    const artist = await this.$axios.$post('/api/artist/add', formdata)
    commit('ADD_ITEM', artist)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
