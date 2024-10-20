import React, { useEffect, useState } from "react";
import { fetchContent } from "../services/api";
import { Container } from "react-bootstrap";

const Project = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent("node/projects")
      .then((data) => {
        let htmlContent = data.data[0]?.attributes?.body?.value || "";
        htmlContent = htmlContent.replace(/<a /g, '<a target="_blank" ');
        setContent(htmlContent);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
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

  return (
    <Container
      style={{
        marginTop: "70px",
        marginLeft: "50px",
        marginRight: "50px",
        marginBottom: "20px",
        flex: "1",
      }}
    >
      <h1>Projects</h1>
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div>No content available</div>
      )}
    </Container>
  );
};

export default Project;
