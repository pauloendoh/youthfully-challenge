import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
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
    <Container height="100vh" maxW="container.lg" centerContent>
      <Box mt={10}>
        <Card maxW="md">
          <CardHeader>{imageDetails.id}</CardHeader>
          <Divider borderColor="lightgray" />
          <CardBody>
            <Image
              src={imageDetails.link}
              alt={imageDetails.title}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{imageDetails.title}</Heading>
              <Text>Description: {imageDetails.description}</Text>
              <Text>Upvotes: {imageDetails.vote}</Text>
              <Text>Downvotes: </Text>
              <Text>Score: </Text>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Container>
  );
};

export default ImageDetailsPage;
