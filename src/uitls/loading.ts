import { Loading } from 'element-ui'

export class MyLoading {
  public num: number
  constructor(num: number) {
    this.num = num
  }
  public add() {
    this.num += 1
  }
  public minus() {
    this.num -= 1
  }
}
