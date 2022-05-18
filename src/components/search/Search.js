import "./Search.scss";
import Card from "../common/Card";
import Article from "./article/Article";
import { useRef, useState } from "react";

function Search() {
	const searchBar = useRef(null);

  let [monster, setMonster] = useState([]);
  let [monsters, setMonsters] = useState([]);
  let [suggestions, setSuggestions] = useState([]);
  let [suggest, setSuggest] = useState(false);

  function startFetch(e) {
    let query = e.target.value.replace(/ /g, "-").toLowerCase();
    if (query !== "") {
      setSuggest(true);
    } else {
      setSuggest(false);
    }
    fetchMonsters(query);
    fetchMonster(query);
  }

  function fetchMonsters(query) {
    fetch("https://www.dnd5eapi.co/api/monsters/")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data.results);
        monsters = monsters.filter((monster) => monster.index.includes(query));
        setSuggestions(monsters);
      });
  }

  function fetchMonster(query) {
    fetch("https://www.dnd5eapi.co/api/monsters/" + query)
      .then((response) => response.json())
      .then((data) => {
        setMonster(data);
      });
  }

	function fetchMonsterFromSuggestion(query) {
    fetch("https://www.dnd5eapi.co/api/monsters/" + query)
      .then((response) => response.json())
      .then((data) => {
        setMonster(data);
				searchBar.current.value = data.name;
      });
  }

  function fetchSuggestion(e) {
    let query = e.target.innerText.replace(/ /g, "-").toLowerCase();
    fetchMonsterFromSuggestion(query);
  }

  if (suggestions.length > 0 && !monster.name && suggest) {
    return (
      <Card className="card-main d-flex">
        <Card className="card-section input-container">
          <input
            type="text"
            placeholder="Buscar"
            onChange={startFetch}
            ref={searchBar}
          ></input>
          <div className="suggestions">
            {suggestions.map(({ index, name }) => (
              <div onClick={fetchSuggestion} key={index}>
                {name}
              </div>
            ))}
          </div>
        </Card>
        <Card className="card-section article-container">
          <Article fetchedMonster={monster}></Article>
        </Card>
      </Card>
    );
  }
  return (
    <Card className="card-main d-flex">
      <Card className="card-section input-container">
        <input type="text" placeholder="Buscar" onChange={startFetch}></input>
      </Card>
      <Card className="card-section article-container">
        <Article fetchedMonster={monster}></Article>
      </Card>
    </Card>
  );
}

export default Search;
