const Header = (props) => {
return(
    <header>
        <h2>Wielkość zamówienia: {props.items.length}</h2>
        <h2>Do zapłaty: {props.items.length * 10 } złotych</h2>
    </header>
)
}