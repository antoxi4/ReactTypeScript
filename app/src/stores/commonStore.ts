import { observable, action, computed } from 'mobx'

export class CommonStore {
  @observable test = 'This is a Test String'
}

export default new CommonStore()
