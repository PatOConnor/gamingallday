import { Button } from 'react-bootstrap'
import './sidebar.css'
const Sidebar = ({jsxContent, sidebarState, handleStateCallback}) => {
  console.log(jsxContent)
  return (
    <nav className={`sidebar ${sidebarState ? 'showing' : ''}`}>
      {/* <Button className='closeButton' onClick={handleStateCallback}>❌close</Button> */}
      {jsxContent}
    </nav>
  )
}

export default Sidebar