import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, deleteValue, totalValue } from "../redux/action/calculaton";

const Calculation = () => {
  const expression = useSelector((state) => state.calculateData.result); // Default fallback
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("expression:", expression);
  }, [expression]);

  const handleClick = (val) => {
    dispatch(addValue(val));
  };

  const clear = () => {
    dispatch(deleteValue());
  };

  const calculate = () => {
    dispatch(totalValue());
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="max-w-sm mx-auto mt-10 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">🧮 Smart Calculator</h2>
        <input
          type="text"
          value={expression}
          readOnly
          className="w-full mb-5 text-2xl p-4 text-right border rounded-lg bg-gray-100 font-mono"
        />
        <div className="grid grid-cols-4 gap-3 mb-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
              className={`p-4 rounded-xl font-semibold text-white text-lg shadow transition duration-200 ${btn === "="
                ? "bg-green-500 hover:bg-green-600 col-span-1"
                : ["+", "-", "*", "/"].includes(btn)
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-gray-700 hover:bg-gray-800"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <button
          onClick={clear}
          className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-lg font-bold shadow"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculation;
