import { observable, action, computed } from 'mobx'

export class CommonStore {
  @observable testString: string = 'This is a Test String'
}

export default new CommonStore()
