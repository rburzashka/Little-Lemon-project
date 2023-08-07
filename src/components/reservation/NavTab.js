
const NavTab = (props) => {

    return (
        <nav className={props.className}>
            {props.children()}
        </nav>
    )
}

export default NavTab;