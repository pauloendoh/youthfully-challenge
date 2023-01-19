import { Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IGaleryImage } from "../../../types/gallery/GalleryResponse";
import { urls } from "../../../utils/urls";

type Props = {
  image: IGaleryImage;
};

const ImageContainer = ({ image }: Props) => {
  return (
    <Center width={360}>
      <Link href={urls.pages.imageDetails(image.id)}>
        <a>
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
          <Text noOfLines={1} textAlign="center">
            {image.description || "No description"}
          </Text>
        </a>
      </Link>
    </Center>
  );
};

export default ImageContainer;
