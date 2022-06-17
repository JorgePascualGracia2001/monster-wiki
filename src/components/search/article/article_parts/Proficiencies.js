function Proficiencies (props) {
    if (props.content.length === 0) {
        return (
            <div>
                Proficiencies:
                <div>
                    this creature has no proficiencies
                </div>
            </div>
        )
    }
    return (
        <div>
            Proficiencies:
                {props.content.map(function(content) {
                    return (
                        <div key={content.proficiency.index}>
                            {content.proficiency.name} +{content.value}
                        </div>
                    )
                })}
        </div>
    )
}

export default Proficiencies;