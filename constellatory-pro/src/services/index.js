import { getData } from './request'

export default async (store) => {
  const consName = store.state.consName,
        filed = store.state.filed,
        data = await getData(consName, filed)
        
  if (data.error_code) {
    store.commit('setErrorCode', data.error_code)
    return
  }

  store.commit('setdata', data)
}
