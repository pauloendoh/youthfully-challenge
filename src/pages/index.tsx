import axios from "axios";

import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react";

import { useState } from "react";
import ImageContainer from "../components/search-page/ImageContainer";
import SectionSelector from "../components/search-page/SectionSelector";
import SortSelector from "../components/search-page/SortSelector";
import WindowSelector from "../components/search-page/WindowSelector";
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

  return (
    <VStack height="100vh">
      <Box mt={4}>
        <HStack width="100%" justifyContent="space-between">
          <SectionSelector
            value={filter.section}
            onChange={(value) => setFilter({ ...filter, section: value })}
          />

          <SortSelector
            value={filter.sort}
            onChange={(value) => setFilter({ ...filter, sort: value })}
          />

          <WindowSelector
            value={filter.window}
            onChange={(value) => setFilter({ ...filter, window: value })}
          />
        </HStack>

        <HStack width="100%" justifyContent={"space-between"} mt={2}>
          <div></div>
          <Button onClick={handleSearch} isLoading={isLoading}>
            Search
          </Button>
        </HStack>
      </Box>

      <Box mt={4}>
        <Flex style={{ gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {images.map((image) => (
            <ImageContainer key={image.id} image={image} />
          ))}
        </Flex>
      </Box>
    </VStack>
  );
};

export default Index;
