import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { SortType } from "../../../../types/IFilter";

type Props = {
  value: SortType;
  onChange: (value: SortType) => void;
};

const options: {
  value: SortType;
  label: string;
}[] = [
  { value: "viral", label: "Viral" },
  { value: "top", label: "Top" },
  { value: "time", label: "Time" },
  { value: "rising", label: "Rising" },
];

const SortSelector = (props: Props) => {
  return (
    <FormControl>
      <FormLabel>Sort</FormLabel>
      <Select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value as SortType)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelector;
