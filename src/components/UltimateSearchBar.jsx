import { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { useMeasure } from "react-use"

import { words } from "popular-english-words"

import Trie from "../utils/Trie.js"
const trie = new Trie()
const temp = words.getMostPopular(10000)
temp.forEach((word) => trie.insert(word))

export const UltimateSearchBar = () => {
  const [word, setWord] = useState("")
  const [resultHeight, setResultHeight] = useState(0)
  const [ref, { height }] = useMeasure()

  const [results, setResults] = useState([])

  const SlideDown = useSpring({
    height: results.length ? `${resultHeight}px` : `0px`
  })

  useEffect(() => {
    if (word.length) {
      const pref = word
      setResults(trie.find(pref))
    } else {
      setResults([])
    }
  }, [word])

  useEffect(() => {
    setResultHeight(height)
    window.addEventListener("resize", setResultHeight(height))
    return window.removeEventListener("resize", setResultHeight(height))
  }, [height])

  return (
    <div className="Wrapper">
      <div className="Search">
        <input
          autoFocus
          className="Search__input"
          type="text"
          placeholder="Search"
          value={word}
          onChange={(e) => setWord(e.target.value.toLowerCase())}
        />
      </div>
      {words.getWordRank(word) !== -1 && (
        <div className="Place">
          Place: {words.getWordRank(word)} according to{" "}
          <a href="https://www.npmjs.com/package/popular-english-words">top</a>
        </div>
      )}

      <animated.ul className="SearchResults" style={SlideDown}>
        <div ref={ref}>
          {results.length ? (
            results.map((result, i) => (
              <li
                key={i}
                onClick={() => {
                  setWord(result)
                }}
              >
                {result}
              </li>
            ))
          ) : (
            <li>That word is not in top 10000 English words...</li>
          )}
        </div>
      </animated.ul>
    </div>
  )
}
