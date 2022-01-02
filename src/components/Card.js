import './Card.css';

function Card(props) {
    const classes = 'card' + props.className;
    // children is a reserved name and value will always be content betwen opening/closing card tag
    return <div className={classes}>{props.children}</div>
}

export default Card;