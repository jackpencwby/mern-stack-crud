import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#home">MERN STACK CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/login">เข้าสู่ระบบ</Nav.Link>
                        <Nav.Link href="/register">สมัครสมาชิก</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderBar;