import { useI18Next } from "@/i18n";
import Select, { GroupBase, Props, StylesConfig } from "react-select";
interface Custom {
  error?: string;
  touched?: boolean;
  label?: string;
  showError?: boolean;
}
function ISelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & Custom) {
  const { t } = useI18Next();
  const { label, showError = true, name, id, error, touched } = props;

  const customStyles: StylesConfig<Option, IsMulti, Group> = {
    control: (provided: Record<string, unknown>, state: any) => ({
      ...provided,
      border: touched && error ? "1px solid red" : "1px solid #cccccc",
    }),
  };
  return (
    <div>
      {label && (
        <label htmlFor={id || name} className="text-sm mb-2 inline-block">
          {label}
        </label>
      )}
      <Select
        {...props}
        styles={customStyles}
        classNamePrefix="i_select"
        noOptionsMessage={() => t("general.notFound")}
      />
      {showError && touched && error ? (
        <span className="i-error-text">{error}</span>
      ) : null}
    </div>
  );
}

export default ISelect;
