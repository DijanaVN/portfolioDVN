import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
const Layout = () => {
  return (
    <>
      <div className="bg-primary sticky-top">
        <NavBar />
      </div>
      <Container fluid className="mt-3">
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;