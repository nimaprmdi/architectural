import { gql } from "@apollo/client";

const Home_DATA = gql`
  query getHomeProjects($slug: String!) {
    home(where: { slug: $slug }) {
      projects(where: { OR: [{ isSlider: true }, { isSelected: true }] }) {
        projectTitle
        description
        projectsGallery {
          mimeType
          url(transformation: { document: { output: { format: jpg } } })
        }
        isSelected
        isSlider
        category
      }
      abouts {
        description
        descriptionTitle
        descriptionThumbnail {
          url(transformation: { document: { output: { format: jpg } } })
        }
        featuresTitle
        featuresIconsData
        featuresDescription
      }
    }
  }
`;

const POJECTS_SLIDERS = gql`
  query projectsSliders {
    projects(where: { isSlider: true }) {
      projectTitle
      projectsGallery {
        url(transformation: { document: { output: { format: jpg } } })
        handle
      }
      id
    }
  }
`;

const PROJECT = gql`
  query projectSingle($id: ID!) {
    project(where: { id: $id }) {
      category
      description
      descriptionThumbnail {
        handle
        url(transformation: { document: { output: { format: jpg } } })
      }
      descriptionTitle
      featuresDescription
      featuresIcons
      featuresThumbnail {
        handle
        url(transformation: { document: { output: { format: jpg } } })
      }
      id
      isSelected
      isSlider
      projectSlug
      projectTitle
      projectsGallery {
        url(transformation: { document: { output: { format: jpg } } })
      }
    }
  }
`;

export { Home_DATA, POJECTS_SLIDERS, PROJECT };
