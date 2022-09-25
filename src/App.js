import { useState } from "react"
import { Popup } from "./components/Popup"

import { UltimateSearchBar } from "./components/UltimateSearchBar"

import "./styles.css"

export default function App() {
  const [isPopupActive, setPopupActive] = useState(false)

  return (
    <div className="App">
      <div
        className="Ribbon"
        onClick={() => {
          setPopupActive(true)
        }}
      >
        What?
      </div>
      <h1>Start typing word...</h1>
      <UltimateSearchBar />
      <Popup active={isPopupActive} setActive={setPopupActive}>
        <h1>What on Earth is it?</h1>
        <p>
          <a href="https://github.com/daniilboyarinkov">{"Me, myself and I"}</a>
          {" call it Ultimate Search Bar"}
        </p>
        <h1>
          Have you ever heard of{" "}
          <a href="https://en.wikipedia.org/wiki/Trie">Trie</a>?
        </h1>
        <p>
          Trie is a datastructure that been usually used in autocomplete and
          word prediction tools
        </p>
        <p>So, what? I implemented it. Isn't it nice?</p>
        <h1>Why? There are so many preimplemented solutions...</h1>
        <p>Because I can...</p>
        <h1>What's the top?</h1>
        <p>
          <a href="https://www.npmjs.com/package/popular-english-words">
            Popular English Words
          </a>
          {" Npm Package"}
        </p>
      </Popup>
    </div>
  )
}
