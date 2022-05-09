import "./Search.scss";
import Card from "../common/Card";
import Article from "./article/Article";
import { useState } from "react";




function Search() {

	let [monster, setMonster] = useState([]);
	
	function fetchMonster(e){
		let query = e.target.value.replace(/ /g, "-")
		fetch("https://www.dnd5eapi.co/api/monsters/" + query)
			.then((response) => response.json())
				.then((data) => setMonster(data));
	};

  return (
    <Card className="card-main d-flex">
      <Card className="card-section input-container">
        <form>
          <input type="text" onChange={fetchMonster}></input>
        </form>
      </Card>
			<Card className="card-section article-container">
      	<Article fetchedMonster={monster}></Article>
			</Card>
    </Card>
  );
}

export default Search;
