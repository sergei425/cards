import './style.css'

export default function Item(props) {
  return (
    <div className="card">
      {props.children}
      <div className="card__wrap">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <p></p>
        <button>Go somewhere</button>
      </div>
    </div>
  )
}