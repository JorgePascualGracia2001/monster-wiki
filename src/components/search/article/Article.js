import "./Article.scss";
import DamageTypes from "./article_parts/DamageTypes";
import Proficiencies from "./article_parts/Proficiencies";
import Senses from "./article_parts/Senses";
import Speed from "./article_parts/Speed";

function Article(props) {
	const data = props.fetchedMonster
	console.log(data)
	if (data.alignment === undefined) {
		data.alignment = "unaligned"
	}
	if (data.languages === "") {
		data.languages = "this creature doesnt speak any languages"
	}
	if (data.reactions === []) {
		data.reactions = "this creature doesn't have any reactions"
	}
		if (data.name){
			return(
				<div>
					<div>{data.name}</div>
					<div className="characteristics">
						<div>CHA: {data.charisma} CON:{data.constitution} DEX:{data.dexterity} INT:{data.intelligence} STR:{data.strength} WIS:{data.wisdom}</div>
					</div>
					<div>Size: {data.size}</div>
					<div>Type: {data.type}</div>
					<div>ALignment: {data.alignment}</div>
					<div>AC: {data.armor_class}</div>
					<div>Hit points: {data.hit_points}</div>
					<div>Hit dice: {data.hit_dice}</div>
					<div>Languages: {data.languages}</div>
					<div>Experience: {data.xp}</div>
					<DamageTypes type="immunities" content={data.damage_immunities}></DamageTypes>
					<DamageTypes type="resistances" content={data.damage_resistances}></DamageTypes>
					<DamageTypes type="vulnerabilities" content={data.damage_vulnerabilities}></DamageTypes>
					<div>Challenge rating: {data.challenge_rating}</div>
					<Senses content={data.senses}></Senses>
					<Proficiencies content={data.proficiencies}></Proficiencies>
					<Speed content={data.speed}></Speed>
					{/*<div>Reactions: {data.reactions}!</div>
					<div>Special abilities: {data.special_abilities}!</div>
					<div>Actions: {data.actions}!</div>
					<div>Legendary actions: {data.legendary_actions}!</div>*/}
				</div>
			)
		};
		return(
			<div>Busca algo</div>
		)
}

export default Article;