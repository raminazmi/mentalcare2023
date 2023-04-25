import { useForm } from "react-hook-form";
const InputForm = (props) => {
  const { inputClassName = "", inputProps2, ...inputProps } = props;
  return (
    <div className="w-full">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {inputProps.placeholder}
      </div>
      <div className="bg-white my-2 p-1 flex flex-col border border-gray-200 rounded">
        <input
          {...inputProps}
          className={`p-1 px-2 appearance-none outline-none w-full text-gray-800  ${inputClassName}`}
        />
      </div >
    </div>
  )
}
export default InputForm