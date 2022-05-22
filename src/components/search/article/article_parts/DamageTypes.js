function DamageTypes(props) {
    if (props.type === "immunities") {
        if (props.content.length !== 0) {
            return (
                <div>Damage inmunities:
                    {props.content.map(data => (
                        <div>
                            {data}
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    Damage immunities:
                    <div>
                        no damage immunities
                    </div>
                </div>
            )
        }
    }
    if (props.type === "resistances") {
        if (props.content.length !== 0) {
            return (
                <div>Damage resistances:
                    {props.content.map(data => (
                        <div>
                            {data}
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    Damage resistances:
                    <div>
                        no damage resistances
                    </div>
                </div>
            )
        }
    }
    if (props.type === "vulnerabilities") {
        if (props.content.length !== 0) {
            return (
                <div>Damage vulnerabilities:
                    {props.content.map(data => (
                        <div>
                            {data}
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    Damage vulnerabilities:
                    <div>
                        no damage vulnerabilities
                    </div>
                </div>
            )
        }
    }
}

export default DamageTypes;