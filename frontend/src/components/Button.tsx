const Button: React.FC<{ label: string }> = ({ label }) => {
    return (
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        {label}
      </button>
    );
  };
  
  export default Button;
  