import Button from './Button';
const Header = (props: any) => {
    const onClick = () => {
        console.log('click')
    }
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button color="green" text="Add" onClick={onClick}/>
    </header>
  )
}

export default Header