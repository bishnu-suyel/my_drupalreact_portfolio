import { useState, useEffect } from 'react';
import { fetchContent } from "../services/api";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    fetchContent("node/contact")
      .then((data) => {
        console.log("Fetched data:", data);
        setContent(data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Use EmailJS to send the email
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);

        // Now send the form data to Drupal
        fetch("http://my-drupal-portfolio.lndo.site/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Updated to match the controller
          body: JSON.stringify(emailData),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to send data to Drupal");
            }
            return res.json();
          })
          .then((data) => {
            console.log("Data sent to Drupal successfully:", data);
            // Reset form after successful submission
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          })
          .catch((error) => {
            console.error("Error sending data to Drupal:", error);
          });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <Container
      style={{
        marginTop: "70px",
        marginLeft: "50px",
        marginRight: "0px",
        marginBottom: "20px",
        flex: "1",
      }}
    >
      <h1>Contact Me</h1>
      <Row>
        <Col md={6}>
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : error ? (
            <Alert variant="danger">Error fetching content: {error.message}</Alert>
          ) : content && content.attributes && content.attributes.body ? (
            <div
              dangerouslySetInnerHTML={{
                __html: content.attributes.body.value,
              }}
            />
          ) : (
            <div>No content available</div>
          )}
        </Col>
        <Col md={4}>
          <h2>Send a message</h2>
          <p>
            Don’t hesitate to reach out. I look forward to hearing your thoughts
            and ideas!
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ marginLeft: "0px" }}
              />
            </Form.Group>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{ marginLeft: "0px" }}
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ marginLeft: "0px" }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
