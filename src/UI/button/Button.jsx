import classes from './button.module.css'

const Button = (props) => {
    const myClass = `${classes.button} ${props.type}`
  return (
    <button className={myClass} >
        {props.children}
    </button>
  )
}

export default Button
