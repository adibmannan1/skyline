const CustomInput = ({ type, className }) => {
    return (
        <input
        type="checkbox"
        className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none mr-2"
      />
    );
  };
  
export default CustomInput;