import classes from './card.module.css'

const Card = (props) => {
    const myClass = `${classes.card} ${props.className}`
  return (
    <div className={myClass}>
        {props.children}
    </div>
  )
}

export default Card
  