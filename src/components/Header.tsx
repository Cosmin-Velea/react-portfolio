import Button from './Button';
const Header = (props: any) => {
    const onClick = () => {
        console.log('click')
    }
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close': 'Add'} onClick={props.onAdd}/>
    </header>
  )
}

export default Header