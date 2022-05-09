import "./Article.scss";

function Article(props) {
	console.log(props.fetchedMonster)
		if (props.fetchedMonster.name){
			return(
				<div>
					<div>Nombre: {props.fetchedMonster.name}</div>
					<div>Vida: {props.fetchedMonster.hit_points}</div>
					<div>Dados: {props.fetchedMonster.hit_dice}</div>
				</div>
			)
		};
		return(
			<div>Busca algo</div>
		)
}

export default Article;