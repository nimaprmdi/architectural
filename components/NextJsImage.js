import { isImageFitCover, isImageSlide, useLightboxProps } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function NextJsImage({ slide, rect }) {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  return (
    <div style={{ position: "relative" }}>
      <img src={slide} className="w-100 h-100 u-animated-background" />
    </div>
  );
}
