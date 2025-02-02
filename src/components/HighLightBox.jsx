const HighlightBox = ({ title, value, Icon }) => {
    return (
      <div className="bg-gray-600 text-white p-6 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-60 flex flex-col justify-center items-center gap-4 text-center">
        <div className="text-lg font-bold">{title}</div>
        <div className="flex items-center gap-2">
          <Icon className="text-4xl" /> 
          <p className="text-2xl font-bold">{value}</p> 
        </div>
      </div>
    );
  };
  
  export default HighlightBox;