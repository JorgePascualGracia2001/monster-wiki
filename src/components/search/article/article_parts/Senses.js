function Senses (props) {
    if (props.content.darkvision && props.content.blindsight){
        return (
            <div>
                Senses:
                <div>passive perception: {props.content.passive_perception}</div>
                <div>darkvision: {props.content.darkvision}</div>
                <div>blindsight: {props.content.blindsight}</div>
            </div>
        )
    }
    if (props.content.darkvision){
        return (
            <div>
                Senses:
                <div>passive perception: {props.content.passive_perception}</div>
                <div>darkvision: {props.content.darkvision}</div>
            </div>
        )
    }
    if (props.content.blindsight){
        return (
            <div>
                Senses:
                <div>passive perception: {props.content.passive_perception}</div>
                <div>blindsight: {props.content.blindsight}</div>
            </div>
        )
    }
    return (
        <div>
            Senses:
            <div>passive perception: {props.content.passive_perception}</div>
        </div>
    )
}

export default Senses;