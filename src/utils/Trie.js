import TrieNode from "./TrieNode.js"

export default class Trie {
  constructor() {
    this.root = new TrieNode(null)
  }

  /**
   * Inserts a word into trie
   * @param {string} word
   * @returns instance of trie
   */
  insert(word) {
    let current = this.root

    for (const letter of word) {
      if (!current.children.has(letter))
        current.children.set(letter, new TrieNode(letter))
      current = current.children.get(letter)
    }
    current.isEnd = true
    return this
  }

  /**
   * Checks whether word is in trie
   * @param {string} word
   * @returns true or false
   */
  search(word) {
    let current = this.root

    for (const letter of word) {
      if (!current.children.has(letter)) return false
      current = current.children.get(letter)
    }
    return current.isEnd
  }

  /**
   * Finds all words in a trie with given prefix
   * @param {string} pref
   * @returns string[] of all words in a trie with that prefix
   */
  find(pref) {
    const result = []
    const node = this.getNode(pref)

    if (!node) return result

    function traverse(node, string) {
      if (node.children.size !== 0) {
        for (const letter of node.children.keys()) {
          traverse(node.children.get(letter), string.concat(letter))
        }
        if (node.isEnd) result.push(pref + string)
      } else {
        if (string.length > 0) result.push(pref + string)
        return
      }
    }
    traverse(node, "")
    return result
  }

  /**
   * Gets node to start after pref or null if no pref is in trie
   * @param {string} pref
   * @returns TrieNode of the last letter of pref if so else null
   */
  getNode(pref) {
    let current = this.root

    for (const letter of pref) {
      if (!current.children.has(letter)) return null
      current = current.children.get(letter)
    }
    return current
  }
}
