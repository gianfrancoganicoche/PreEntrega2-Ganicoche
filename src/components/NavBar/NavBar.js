import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className= "me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Link className="navbar-brand" to={"/"}><img src="https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png" alt="logoPizzaclub" width={60} /></Link>
            <Nav.Link href='/category/Hamburguesa'>Hamburguesas</Nav.Link>
            <Nav.Link href='/category/Pasta'>Pastas</Nav.Link>
            <Nav.Link href='/category/Pizza'>Pizzas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Qué estás buscando?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;