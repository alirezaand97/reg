import { useI18Next } from "@/i18n";
import { t } from "i18next";
import Select, { GroupBase, Props, OnChangeValue } from "react-select";
interface Custom {
  error?: string;
  touched?: boolean;
  label?: string;
}
function ISelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & Custom) {
  const { t } = useI18Next();

  return (
    <div>
      {props.label && (
        <label
          htmlFor={props.id || props.name}
          className="text-sm mb-2 inline-block"
        >
          {props.label}
        </label>
      )}
      <Select
        {...props}
        classNamePrefix="i_select"
        noOptionsMessage={() => t("general.notFound")}
      />
      {props.touched && props.error ? (
        <span className="i-error-text">{props.error}</span>
      ) : null}
    </div>
  );
}

export default ISelect;
