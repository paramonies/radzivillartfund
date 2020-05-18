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
  }
}

const actions = {
  async GET_LIST({ state, commit }) {
    const artists = await this.$axios.$post('/api/artist/list')
    commit('SET_LIST', artists)
  },
  async GET_ITEM({ state, commit }, { iArtistID }) {
    const artist = await this.$axios.$post('/api/artist/item', { iArtistID })
    commit('SET_ITEM', artist)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}