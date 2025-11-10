import React, { useState } from "react";
import { useSelector } from "react-redux";
import makeAnimated from "react-select/animated";
import Select from "react-select";

const ScheduledPosts = () => {
  const { authUser } = useSelector((state) => state.auth);
  const animatedComponents = makeAnimated();
  const [scheduleNow, setscheduleNow] = useState(false);
  const [selectedPlatforms, setPlatforms] = useState([]);
  const [postForm, setForm] = useState({
    platforms: [],
    caption: "",
    images: [],
    status: "Scheduled",
    scheduleDate: "",
    isScheduled: scheduleNow,
    user: "",
  });
  const options = [
    { values: "facebook", label: "Facebook" },
    { values: "linkedin", label: "LinkedIn" },
    { values: "instagram", label: "Instagram" },
    { values: "twitter", label: "Twitter" },
  ];

  const handleOptions = (selectedOptions) => {
    setPlatforms(selectedOptions);
    setForm({
      ...postForm,
      platforms: selectedOptions.map((opt) => opt.value),
    });
  };

  const selectStyles = {
    control: (style) => ({
      ...style,
      backgroundColor: "gray-900",
      border: "1px solid #5ef882",
      borderRadius: "8px",
      padding: "0.5rem",
      color: "white",
    }),
  };
  return (
    <div className="flex">
      <div className="flex gap-5 w-full flex-col">
        <div className="h-12 relative flex rounded-xl">
          <Select
            options={options}
            defaultValue={selectedPlatforms}
            components={animatedComponents}
            closeMenuOnSelect={false}
            onChange={handleOptions}
            className="w-full"
            styles={selectStyles}
            id="last"
            type="text"
            isMulti={true}
          />
          {/* <label
            className="absolute top-1/2 translate-y-[-50%] text-[#a9a9a9] left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#fff] peer-valid:top-[-4px] peer-focus:bg-gray-900 peer-valid:bg-gray-900 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#5ef882] duration-150"
            htmlFor="last"
          >
            Platforms
          </label> */}
        </div>
        <div className="h-12 relative flex rounded-xl border-2 border-white">
          <input
            className="peer w-full h-full bg-gray-900 text-[#fff] rounded-xl px-4"
            id="last"
            type="text"
          />
          <label
            className="absolute top-1/2 px-2 rounded-full duration-100 left-3 translate-y-[-50%] text-gray-400 peer-focus:-top-0.5 peer-focus:left-4 font-light text-base peer-focus:text-sm peer-focus:text-[#fff] bg-gray-900"
            htmlFor="last"
          >
            Caption
          </label>
        </div>
      </div>
    </div>
  );
};

export default ScheduledPosts;
