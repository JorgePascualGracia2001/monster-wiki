function Speed (props) {
    if (props.content.fly && props.content.walk){
        return (
            <div>
                Speed:
                <div>walk: {props.content.walk}</div>
                <div>fly: {props.content.fly}</div>
            </div>
        )
    }
    if (props.content.climb && props.content.walk){
        return (
            <div>
                Speed:
                <div>walk: {props.content.walk}</div>
                <div>climb: {props.content.climb}</div>
            </div>
        )
    }
    if (props.content.swim && props.content.walk){
        return (
            <div>
                Speed:
                <div>walk: {props.content.walk}</div>
                <div>swim: {props.content.swim}</div>
            </div>
        )
    }
    if (props.content.fly && props.content.swim && props.content.climb){
        return (
            <div>
                Speed:
                <div>walk: {props.content.walk}</div>
                <div>fly: {props.content.fly}</div>
                <div>swim: {props.content.swim}</div>
                <div>climb: {props.content.climb}</div>
            </div>
        )
    }
    if (props.content.fly && props.content.climb){
        return (
            <div>
                Speed:
                <div>walk: {props.content.walk}</div>
                <div>fly: {props.content.fly}</div>
                <div>climb: {props.content.climb}</div>
            </div>
        )
    }
    if (props.content.swim && props.content.climb){
        return (
            <div>
                Speed:
                <div>walk: {props.content.walk}</div>
                <div>swim: {props.content.swim}</div>
                <div>climb: {props.content.climb}</div>
            </div>
        )
    }
    if (props.content.fly && props.content.swim){
        return (
            <div>
                Speed:
                <div>walk: {props.content.walk}</div>
                <div>fly: {props.content.fly}</div>
                <div>swim: {props.content.swim}</div>
            </div>
        )
    }
    if (props.content.swim) {
        return (
        <div>
            Speed:
            <div>swim: {props.content.swim}</div>
        </div>
        )
    }
    if (props.content.climb) {
        return (
        <div>
            Speed:
            <div>climb: {props.content.climb}</div>
        </div>
        )
    }
    if (props.content.fly) {
        return (
        <div>
            Speed:
            <div>fly: {props.content.fly}</div>
        </div>
        )
    }
    return (
        <div>
            Speed:
            <div>walk: {props.content.walk}</div>
        </div>
    )
}

export default Speed;