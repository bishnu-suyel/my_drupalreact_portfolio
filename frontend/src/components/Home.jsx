import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { fetchContent } from "../services/api";
import "../css/home.css";

const decodeHtmlEntities = (text) => {
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
};

const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent("node/home")
      .then((data) => {
        setContent(data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }

  // Extract plain text from the content and decode HTML entities
  const text = content?.attributes?.body?.value || "No content available";
  const decodedText = decodeHtmlEntities(text);
  const letters = decodedText.split("");
  return (
    <Container
      fluid
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          fontSize: "8rem",
          color: "#d3d3d3",
          padding: "20px",
          marginLeft: "0.4rem",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          fontFamily: "'Dancing Script",
          display: "flex",
        }}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className="dancing-letter"
            style={{
              animationDelay: `${index * 0.1}s`,
              marginRight: "0.5rem",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </Container>
  );
};

export default Home;
