import Select from "react-select";
interface Option {
  value: string | number;
  label: string;
}

interface Props {
  options: Option[];
  selectedOption?: Option|null;
  handleChange: (selectedOption: any) => void;
}

const ISelect = ({
  selectedOption,
  handleChange,
  options,
  ...props
}: Props) => {

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     borderBottom: '1px dotted pink',
  //     color: state.isSelected ? 'red' : 'blue',
  //     padding: 20,
  //   }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 200,
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';
  
  //     return { ...provided, opacity, transition };
  //   }
  // }
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      {...props}
    />
  );
};

export default ISelect;
