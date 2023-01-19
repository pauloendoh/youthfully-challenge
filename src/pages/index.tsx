import { Checkbox, Container, GridItem } from "@chakra-ui/react";

import axios from "axios";

import { Box, Button, Flex, HStack } from "@chakra-ui/react";

import { useMemo, useState } from "react";
import FilterRow from "../components/search-page/FilterRow/FilterRow";
import ImageContainer from "../components/search-page/ImageContainer/ImageContainer";
import { useImagesStore } from "../hooks/zustand/useImagesStore";
import { IGaleryImage } from "../types/gallery/GalleryResponse";
import { IFilter } from "../types/IFilter";
import { urls } from "../utils/urls";

const Index = () => {
  const [filter, setFilter] = useState<IFilter>({
    page: 0,
    sort: "viral",
    window: "day",
    section: "hot",
    onlyViralImages: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const { images, setImages } = useImagesStore();

  const handleSearch = async () => {
    setIsLoading(true);
    axios
      .get<IGaleryImage[]>(urls.api.galleryImages, {
        params: filter,
      })
      .then((res) => setImages(res.data))
      .catch((e) => alert(e.message))
      .finally(() => setIsLoading(false));
  };

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      if (filter.onlyViralImages) {
        return image.in_most_viral;
      }
      return true;
    });
  }, [images, filter.onlyViralImages]);

  return (
    <Container height="100vh" maxW="container.xl">
      <Box mt={4}>
        <FilterRow filter={filter} setFilter={setFilter} />

        <HStack justifyContent={"center"} mt={2} gap={4}>
          <Checkbox
            checked={filter.onlyViralImages}
            onChange={(e) =>
              setFilter({ ...filter, onlyViralImages: e.target.checked })
            }
          >
            Viral Images
          </Checkbox>

          <Button onClick={handleSearch} isLoading={isLoading}>
            Search
          </Button>
        </HStack>
      </Box>

      <Flex
        mt={10}
        pb={20}
        style={{ gap: 24, flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredImages.map((image) => (
          <GridItem key={image.id}>
            <ImageContainer image={image} />
          </GridItem>
        ))}
      </Flex>
    </Container>
  );
};

export default Index;
