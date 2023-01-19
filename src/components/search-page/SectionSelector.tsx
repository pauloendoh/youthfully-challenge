import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { SectionType } from "../../types/IFilter";

type Props = {
  value: SectionType;
  onChange: (value: SectionType) => void;
};

const options: {
  value: SectionType;
  label: string;
}[] = [
  { value: "hot", label: "Hot" },
  { value: "top", label: "Top" },
  { value: "user", label: "User" },
];

const SectionSelector = (props: Props) => {
  return (
    <FormControl>
      <FormLabel>Section</FormLabel>
      <Select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value as SectionType)}
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

export default SectionSelector;
