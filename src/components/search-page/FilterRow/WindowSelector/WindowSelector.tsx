import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { WindowType } from "../../../../types/IFilter";

type Props = {
  value: WindowType;
  onChange: (value: WindowType) => void;
};

const options: {
  value: WindowType;
  label: string;
}[] = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
  { value: "year", label: "Year" },
  { value: "all", label: "All" },
];

const WindowSelector = (props: Props) => {
  return (
    <FormControl>
      <FormLabel>Window</FormLabel>
      <Select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value as WindowType)}
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

export default WindowSelector;
