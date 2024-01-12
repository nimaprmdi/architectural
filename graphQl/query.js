import { gql } from "@apollo/client";

const HOME_PROJECTS = gql`
  query getHomeProjects($slug: String!) {
    home(where: { slug: $slug }) {
      projects(where: { isSlider: true }) {
        projectTitle
        projectsGallery {
          mimeType
          url(transformation: { document: { output: { format: jpg } } })
        }
      }
    }
  }
`;

export { HOME_PROJECTS };
