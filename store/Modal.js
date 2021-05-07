export const state = () => ({
  isModalFlag: false
})

export const mutations = {
  setModalFlag (state, isModalFlag) {
    state.isModalFlag = isModalFlag
  }
}

export const actions = {
  openModal ({ commit }) {
    commit('setModalFlag', true)
  },
  closeModal ({ commit }) {
    commit('setModalFlag', false)
  }
}
