import classes from './meetupList.module.css';
import MeetupItems from './meetupItem';

function MeetupList(props) {
    return <ul className={classes.list}>
        {props.meetups.map((meetup) => (
        <MeetupItems
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
        />
        ))}
    </ul>
}
export default MeetupList;