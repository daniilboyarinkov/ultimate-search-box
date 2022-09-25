export default class TrieNode {
  constructor(value) {
    this.value = value
    this.isEnd = false
    this.children = new Map()
  }
}
