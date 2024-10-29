import { TextPrimary } from "../typography/Text";

type InputTextProps = {
  labelText: string;
  placeholder?: string;
  onChange: (e: string) => void;
  isRequired?: boolean;
};

type InputDropdownProps = {
  labelText: string;
  options: string[];
  onChange: (e: string) => void;
  isRequired?: boolean;
};

type InputRadioProps = {
    labelText: string;
    onChange: (e: boolean) => void;
    isRequired?: boolean;
}

type InputEmailProps = {
    labelText: string;
    onChange: (e: string) => void;
}

type InputPasswordProps = {
    labelText: string;
    onChange: (e: string) => void;
}

export const InputText: React.FC<InputTextProps> = ({
  labelText,
  placeholder,
  onChange,
  isRequired
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <TextPrimary>{labelText} <span className={isRequired ? "text-red-600 font-extrabold" : "hidden"}>*</span></TextPrimary>
      <input
        type="text"
        className="border-2 border-slate-600 rounded-md px-4 py-2 focus:outline-[#efd439]"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export const InputDropdown: React.FC<InputDropdownProps> = ({
  labelText,
  options,
  onChange,
  isRequired
}) => {
    const localOptions: string[] = ["No Selection", ...options];

  return (
    <div className="flex flex-col gap-y-4 my-2">
      <TextPrimary>{labelText} <span className={isRequired ? "text-red-600 font-extrabold" : "hidden"}>*</span></TextPrimary>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="border-2 border-slate-600 rounded-md px-4 py-2 focus:outline-[#efd439]"
      >
        {localOptions.map((item, key) => {
          return (
            <option className="" value={item} key={key}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};


export const InputRadio: React.FC<InputRadioProps> = ({
    labelText,
    onChange,
    isRequired
  }) => {
    return (
      <div className="flex gap-x-2 my-4 items-center">
        <input
        type="radio"
          onChange={(e) => {
            onChange(e.target.value === "on" ? true : false);
          }}
          className="border-2 border-slate-600 rounded-md px-4 py-2 focus:outline-[#efd439]"
        />
        <TextPrimary>{labelText} <span className={isRequired ? "text-red-600 font-extrabold" : "hidden"}>*</span></TextPrimary>
      </div>
    );
  };

  export const InputEmail: React.FC<InputEmailProps> = ({
    labelText,
    onChange,
  }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <TextPrimary>{labelText}</TextPrimary>
        <input
          type="email"
          className="border-2 border-slate-600 rounded-md px-4 py-2 focus:outline-[#efd439]"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
    );
  };

  export const InputPassword: React.FC<InputPasswordProps> = ({
    labelText,
    onChange,
  }) => {
    return (
      <div className="flex flex-col gap-y-4">
        <TextPrimary>{labelText}</TextPrimary>
        <input
          type="password"
          className="border-2 border-slate-600 rounded-md px-4 py-2 focus:outline-[#efd439]"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
    );
  };