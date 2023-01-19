import { Box, HStack } from "@chakra-ui/react";
import { IFilter } from "../../../types/IFilter";
import SectionSelector from "./SectionSelector/SectionSelector";
import SortSelector from "./SortSelector/SortSelector";
import WindowSelector from "./WindowSelector/WindowSelector";

type Props = {
  filter: IFilter;
  setFilter: (value: IFilter) => void;
};

const FilterRow = ({ filter, setFilter }: Props) => {
  return (
    <HStack justifyContent="center">
      <Box width={360}>
        <SectionSelector
          value={filter.section}
          onChange={(value) => setFilter({ ...filter, section: value })}
        />
      </Box>

      <Box width={360}>
        <SortSelector
          value={filter.sort}
          onChange={(value) => setFilter({ ...filter, sort: value })}
        />
      </Box>

      <Box width={360}>
        <WindowSelector
          value={filter.window}
          onChange={(value) => setFilter({ ...filter, window: value })}
        />
      </Box>
    </HStack>
  );
};

export default FilterRow;
