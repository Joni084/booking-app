import classes from './button.module.css'

const Button = (props) => {
    const myClass = `${classes.button} ${props.className}`
  return (
    <button className={myClass} onClick = {props.onClick}>
        {props.children}
    </button>
  )
}

export default Button
  