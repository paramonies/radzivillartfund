const state = () => ({
  list: [],
  item: {}
})

const getters = {}

const mutations = {
  SET_LIST(state, pictures) {
    state.list = pictures
  },
  SET_ITEM(state, picture) {
    state.item = picture
  },
  ADD_ITEM(state, picture) {
    state.list.push(picture)
  },
  DELETE_ITEM(state, iPictureID) {
    const index = state.list.findIndex((item) => item.iPictureID === iPictureID)
    console.log('!!!', index)
    state.list.splice(index, 1)
  },
  UPDATE_sPictureName(state, sPictureName) {
    state.item.sPictureName = sPictureName
  }
}

const actions = {
  async GET_LIST({ state, commit }) {
    const pictures = await this.$axios.$post('/api/picture/list')
    commit('SET_LIST', pictures)
  },
  async GET_ITEM({ state, commit }, { iPictureID }) {
    const picture = await this.$axios.$post('/api/picture/item', { iPictureID })
    commit('SET_ITEM', picture)
  },
  async ADD_ITEM({ state, commit }, formdata) {
    const picture = await this.$axios.$post('/api/picture/add', formdata)
    commit('ADD_ITEM', picture)
  },
  async DELETE_ITEM({ state, commit }, { iPictureID }) {
    await this.$axios.$post('/api/picture/delete', {
      iPictureID
    })
    commit('DELETE_ITEM', iPictureID)
  },
  UPDATE_sPictureName({ commit }, sPictureName) {
    commit('UPDATE_sPictureName', sPictureName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
