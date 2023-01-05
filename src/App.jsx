import { useState } from "react";
import Jotform from "react-jotform";
import { Container, Navbar, Nav, Row, Button, Modal } from "react-bootstrap";
import { CupHot } from "react-bootstrap-icons";

function App() {
  const [show, setShow] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSupport = () => setShowSupport(false);
  const handleShowSupport = () => setShowSupport(true);
  return (
    <>
      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Jotform src="https://utahcounty.jotform.com/230044705720041"></Jotform>
        </Modal.Body>
      </Modal>
      <Modal show={showSupport} fullscreen={true} onHide={handleCloseSupport}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Jotform src="https://utahcounty.jotform.com/230046771412852"></Jotform>
        </Modal.Body>
      </Modal>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Some sort of menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="d-flex ">
          <h1>Main Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vero ratione corrupti, reprehenderit sunt hic esse est fugit
            voluptatem debitis veniam totam ullam? Possimus, facere accusamus.
            Architecto rem at alias.
          </p>
        </Row>
      </Container>
      <Container fluid>
        <footer className="bg-light p-2 d-flex justify-content-center">
          <Button className="mx-1" onClick={handleShow}>
            <CupHot></CupHot>
          </Button>
          <Button className="mx-1" onClick={handleShowSupport}>
            Submit Error Report
          </Button>
        </footer>
      </Container>
    </>
  );
}

export default App;
