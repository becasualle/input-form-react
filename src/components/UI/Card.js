// import module type css, need to access "styles"
import styles from './Card.module.css';

const Card = props => {
    return (
        // add card class (from object styles select card property)
        // add local component class using props
        <div className={`${styles.card} ${props.className}`}>
            {/* get access to any JSX code that we will pass inside <Card></Card> */}
            {props.children}
        </div >
    );
}

export default Card;