const addNumber = {
  state: {
    name: '盼盼',
    code: ''
  },
  getters: {},
  mutations: {
    changeName(state, data) {
      state.name = data
      console.log('vuex接受数据', state, data)
    },
    getCode(state, data) {
      console.log('vux接受到',data)
      state.code = data;
    }
  },
  actions: {}
}

export default addNumber
