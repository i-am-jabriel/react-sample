export default function Navbar(props) {
    return <div className={props.type}>
        <h1>This is where my {props.type || 'Navbar'} goes</h1>
        <div></div>
    </div>
}