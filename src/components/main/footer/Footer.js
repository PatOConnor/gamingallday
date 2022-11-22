import { Link } from 'react-router-dom'
const Footer = () => {
  return (<footer>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <Link to="https://patoconnor.github.io">Main Site</Link>
  </footer>)

}

export default Footer