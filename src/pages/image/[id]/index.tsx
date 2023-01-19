import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ImageDetails } from "../../../types/image/ImageResponse";
import { urls } from "../../../utils/urls";

type Props = {
  imageDetails: ImageDetails;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = String(context.query.id);
  const url = urls.api.imageDetails(id);
  console.log({
    url,
  });
  const res = await axios.get<ImageDetails>(url);

  return {
    props: {
      imageDetails: res.data,
    },
  };
};

const ImageDetailsPage = ({ imageDetails }: Props) => {
  return (
    <Container height="100vh">
      <Box mt={10}>
        <div>
          <h1>{imageDetails.title}</h1>
          <img src={imageDetails.link} alt={imageDetails.title} width="100%" />
        </div>
      </Box>
    </Container>
  );
};

export default ImageDetailsPage;
