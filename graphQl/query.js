import { gql } from "@apollo/client";

const Home_DATA = gql`
  query getHomeProjects($slug: String!) {
    home(where: { slug: $slug }) {
      projects(where: { OR: [{ isSlider: true }, { isSelected: true }] }) {
        projectTitle
        description
        id
        projectsGallery {
          mimeType
          url(transformation: { document: {} })
        }
        isSelected
        isSlider
        category
      }
      abouts {
        description
        descriptionTitle
        descriptionThumbnail {
          url(transformation: { document: {} })
          handle
        }
        featuresTitle
        featuresIconsData
        featuresDescription
        locationTitle
        locationDescription
        locationThumbnail {
          url(transformation: { document: {} })
        }
      }
    }
  }
`;

const POJECTS_SLIDERS = gql`
  query projectsSliders {
    projects(where: { isSlider: true }) {
      id
      category
      projectTitle
      projectsGallery {
        url(transformation: { document: {} })
        handle
        mimeType
      }
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
        url(transformation: { document: {} })
      }
      descriptionTitle
      featuresDescription
      featuresIcons
      featuresTitle
      featuresThumbnail {
        handle
        url(transformation: { document: {} })
      }
      id
      isSelected
      isSlider
      projectSlug
      projectTitle
      projectsGallery {
        url(transformation: { document: {} })
        handle
        mimeType
      }
    }
  }
`;

const CATS = gql`
  query getCats {
    projects {
      category
    }
  }
`;

export { Home_DATA, POJECTS_SLIDERS, PROJECT, CATS };
