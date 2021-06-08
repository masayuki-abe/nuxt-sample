export const state = () => ({
  modalFlag: false
})
export const mutations = {
  openModal (state) {
    state.modalFlag = true
  },
  closeModal (state) {
    state.modalFlag = false
  }
}
