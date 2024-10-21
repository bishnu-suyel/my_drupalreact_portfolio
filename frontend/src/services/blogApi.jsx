import axios from "axios";

const API_URL = "http://localhost:53557/jsonapi/";

export const fetchContent = async () => {
  try {
    const response = await axios.get(
      `${API_URL}node/blog?include=field_blog_image,field_field_blog_additional_imag`
    );
    const blogData = response.data.data[0];
    const includedFiles = response.data.included;

    // Get the main image URL
    const mainImageData = blogData.relationships.field_blog_image.data;
    const mainImageUrl = mainImageData
      ? includedFiles.find((item) => item.id === mainImageData.id)?.attributes
          .uri.url
      : null;

    // Get additional images URLs
    const additionalImages = blogData.relationships
      .field_field_blog_additional_imag.data
      ? blogData.relationships.field_field_blog_additional_imag.data
          .map(
            (image) =>
              includedFiles.find((item) => item.id === image.id)?.attributes.uri
                .url
          )
          .filter((url) => url) // Filter out any undefined URLs
      : []; // Ensure it defaults to an empty array if no additional images

    return {
      title: blogData.attributes.title,
      body: blogData.attributes.body.processed,
      mainImageUrl,
      additionalImages,
    };
  } catch (err) {
    console.error("Error fetching content:", err);
    throw new Error("Error fetching content. Please try again later.");
  }
};
