import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import CSS tùy chỉnh để fix full screen

function IntroductionPage() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header Navbar */}
      <Navbar bg="white" expand="lg" className="shadow-sm flex-shrink-0">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-primary">TechNova</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-dark">Trang chủ</Nav.Link>
              <Nav.Link href="#about" className="text-dark">Giới thiệu</Nav.Link>
              <Nav.Link href="#features" className="text-dark">Tính năng</Nav.Link>
              <Nav.Link href="#contact" className="text-dark">Liên hệ</Nav.Link>
            </Nav>
            <Button variant="outline-primary" className="ms-2">Đăng ký</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section - Full height */}
      <section id="home" className="flex-grow-1 d-flex align-items-center bg-gradient-primary text-white py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">Chào mừng đến với TechNova</h1>
              <p className="lead mb-4">
                Chúng tôi là công ty công nghệ hàng đầu, mang đến giải pháp sáng tạo giúp doanh nghiệp của bạn phát triển vượt bậc. 
                Với hơn 10 năm kinh nghiệm, chúng tôi cam kết đồng hành cùng bạn trên hành trình số hóa.
              </p>
              <Button variant="light" size="lg" className="me-3">Khám phá ngay</Button>
              <Button variant="outline-light" size="lg">Xem demo</Button>
            </Col>
            <Col lg={6}>
              <div className="text-center">
                <img 
                  src="https://via.placeholder.com/500x400/007bff/ffffff?text=TechNova+Hero" 
                  alt="Hero Image" 
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">Về chúng tôi</h2>
              <p className="text-muted lead">
                TechNova được thành lập năm 2015 với sứ mệnh cách mạng hóa ngành công nghệ thông tin tại Việt Nam. 
                Đội ngũ của chúng tôi gồm hơn 100 chuyên gia đam mê, luôn cập nhật xu hướng mới nhất để mang đến giá trị thực sự cho khách hàng.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4} className="text-center mb-4">
              <div className="p-3">
                <i className="fas fa-users fa-3x text-primary mb-3"></i>
                <h5>Đội ngũ xuất sắc</h5>
                <p className="text-muted">Hơn 100 chuyên gia giàu kinh nghiệm.</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="p-3">
                <i className="fas fa-award fa-3x text-primary mb-3"></i>
                <h5>Giải thưởng danh giá</h5>
                <p className="text-muted">Nhận được nhiều giải thưởng quốc tế.</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="p-3">
                <i className="fas fa-globe fa-3x text-primary mb-3"></i>
                <h5>Toàn cầu hóa</h5>
                <p className="text-muted">Phục vụ khách hàng trên 50 quốc gia.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">Tính năng nổi bật</h2>
              <p className="text-muted lead">Khám phá những tính năng giúp chúng tôi khác biệt.</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0">
                <Card.Body className="text-center">
                  <i className="fas fa-rocket fa-3x text-primary mb-3"></i>
                  <Card.Title className="h5">Tốc độ cao</Card.Title>
                  <Card.Text className="text-muted">
                    Giải pháp tối ưu hóa hiệu suất, giúp ứng dụng của bạn chạy mượt mà.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0">
                <Card.Body className="text-center">
                  <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                  <Card.Title className="h5">Bảo mật tuyệt đối</Card.Title>
                  <Card.Text className="text-muted">
                    Công nghệ mã hóa tiên tiến bảo vệ dữ liệu của bạn 24/7.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0">
                <Card.Body className="text-center">
                  <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
                  <Card.Title className="h5">Tương thích đa nền tảng</Card.Title>
                  <Card.Text className="text-muted">
                    Hoạt động hoàn hảo trên web, mobile và desktop.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold text-center mb-4">Liên hệ với chúng tôi</h2>
              <p className="text-center text-muted mb-5">Hãy để lại thông tin, chúng tôi sẽ liên hệ ngay!</p>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Họ và tên</Form.Label>
                      <Form.Control type="text" placeholder="Nhập họ và tên" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Nhập email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Nội dung tin nhắn..." />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg">Gửi tin nhắn</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto flex-shrink-0">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={6}>
              <h5>TechNova © 2025. Tất cả quyền được bảo lưu.</h5>
              <p className="text-muted">Liên hệ: info@technova.vn | Hotline: 1900-1234</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default IntroductionPage;