const ListItems = (props) => {
    const items = props.items.map(item => (
        <Item 
        key={item.id}
        name={item.name}
        active={item.active}
        changeStatus={props.changeStatus}
        id={item.id}
        />
    ))
    return (
        <div className="list">
        <h1>Twoje zamówienie</h1>
        <ul>
            {items}
        </ul>
        </div>
    )
}