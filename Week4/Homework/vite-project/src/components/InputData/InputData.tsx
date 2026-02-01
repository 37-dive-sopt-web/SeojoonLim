interface InputDataProps {
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholderContent: string;
  inputType: string;
}

function InputData({
  value,
  setValue,
  placeholderContent,
  inputType = "text",
}: InputDataProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        type={inputType}
        placeholder={placeholderContent}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}

export default InputData;
