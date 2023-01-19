import Link from "next/link";
import { IGaleryImage } from "../../types/gallery/GalleryResponse";
import { urls } from "../../utils/urls";

type Props = {
  image: IGaleryImage;
};

const ImageContainer = ({ image }: Props) => {
  return (
    <Link href={urls.pages.imageDetails(image.id)}>
      <img
        key={image.id}
        src={image.link}
        alt={image.title}
        style={{
          width: 360,
          height: 360,
          objectFit: "fill",
        }}
      />
    </Link>
  );
};

export default ImageContainer;
