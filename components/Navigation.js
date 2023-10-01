import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

const Navigation = () => (
  <Navbar sticky='top' bg='white' className='shadow-sm' expand='xl'>
    <Navbar.Brand href='#home'>KKIO 2024</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#about'>About</Nav.Link>
        <Nav.Link href='#topics'>Topics</Nav.Link>
        <Nav.Link href='#submissions'>Submissions</Nav.Link>
        <Nav.Link href='#dates'>Dates</Nav.Link>
        <Nav.Link href='#program'>Program</Nav.Link>
        <Nav.Link href='#chairs'>Organization</Nav.Link>
        <Nav.Link href='#pc'>PC</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
)

export default Navigation

