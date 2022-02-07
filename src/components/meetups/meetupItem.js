import Card from '../ui/Cards'
import classes from './meetupItem.module.css';
function MeetupItems(props) {
    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>

            <p>{props.description}</p>

        </div>
        
        <div>
            <button className={classes.actions}>to favorites</button>
        </div>
        </Card>
    </li>

}
export default MeetupItems;