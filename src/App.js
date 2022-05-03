import {Navbar, Container, Nav} from "react-bootstrap";
import {Routes, Route, Link } from "react-router-dom";
import Shop from './components/Shop';
import NotFound from "./components/NotFound";
import Login from "../src/components/Login";


function App() {
  return (
      <div className={'bg-dark'}>
        <div className="container bg-light p-3">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to="/shop" className={'ml-3'}>Shop</Link>
                  <Link to="/login" className={'ml-3'}>Login</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="shop" element={<Shop />} />
            <Route path="login/:id" element={<Login />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;