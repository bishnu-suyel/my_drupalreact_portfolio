import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fetchContent } from "../services/api";

const Projects = () => {
  const [content, setContent] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchContent("node/projectss", ["field_project_image"]);
        const node = data.data[0];
        const htmlContent = node.attributes.body?.value || "";
        const imageRelationships = node.relationships?.field_project_image?.data || [];
        const includedImages = data.included || [];

        const imageUrls = imageRelationships.map((rel) => {
          const imageData = includedImages.find((img) => img.id === rel.id);
          return imageData ? imageData.attributes.uri.url : null;
        }).filter(Boolean);

        setContent(htmlContent);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching content:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      <h1 className="mb-3">Projects</h1>
      <p>
        <strong>ZOO APPLICATION</strong>
      </p>
      {images.length > 0 && (
        <div>
          {/* First row with two images */}
          <Row>
            {images.slice(0, 2).map((url, index) => (
              <Col xs={6} key={index} className="mb-4">
                <img
                  src={`http://my-drupal-portfolio.lndo.site${url}`}
                  alt={`Project Image ${index + 1}`}
                  style={{ width: "100%", height: "auto", maxWidth: "600px", maxHeight: "400px" }}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div>No content available</div>
      )}
      <div>
         {/* Remaining images below the content */}
         {images.length > 2 && (
            <Row>
              {images.slice(2).map((url, index) => (
                <Col xs={6} key={index} className="mb-4">
                  <img
                    src={`http://my-drupal-portfolio.lndo.site${url}`}
                    alt={`Project Image ${index + 3}`}
                    style={{ width: "100%", height: "auto", maxWidth: "600px", maxHeight: "400px" }}
                  />
                </Col>
              ))}
            </Row>
          )}
      </div>
<p>
    The <strong>Countries App</strong> is a React-based project designed to display detailed country information and real-time weather data. The app integrates the REST Countries API for fetching country details, OpenWeatherMap API for weather data, and Unsplash API for fetching images of country capitals. It also leverages Firebase for user authentication and data storage, allowing users to create accounts, log in, and manage their favorite countries. Redux is used for state management, making the app more efficient and organized.
</p>
<p>
    You can check out the live site <a href="https://effervescent-pasca-6dd20f.netlify.app/">here</a>.
</p>
<p>
    &nbsp;
</p>
    </Container>
  );
};

export default Projects;
