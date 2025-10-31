import React from "react";
import myData from "./data/decorative";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
const BackgroundThemes = ({ showBG, setShowBG, setSelectedColor }) => {
  return (
    <div
      className={`w-full -translate-y-full h-full ${
        showBG ? "translate-x-0" : "translate-x-full"
      }  transition-all duration-150 rounded-md mx-auto bg-white shadow-md p-3 absolute`}
    >
      <div className="grid grid-cols-3">
        <div className="h-[30px] col-span-1 absol flex justify-center items-center w-[30px] bg-gray-200 rounded-full self-start">
          <IoIosArrowRoundBack onClick={() => setShowBG(false)} />
        </div>
        <h2 className="self-center text-xl font-semibold whitespace-nowrap col-span-1 text-center">
          Choose Background
        </h2>
        <div className="col-span-1"></div>
      </div>

      {/* colors */}
      <div className="my-2 h-[500px] hide-arrows overflow-y-scroll">
        {myData?.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="font-semibold text-md capitalize">
                {item?.title}
              </h4>

              {/* my colors */}
              <div className="grid grid-cols-5 overflow-x-scroll hide-scrollbar gap-3">
                {item?.list?.map((item2, index2) => {
                  return (
                    <motion.div
                      onClick={() => {
                        index == 2
                          ? setSelectedColor({
                              startColor: item2,
                              endColor: item2,
                              image: "",
                            })
                          : setSelectedColor({
                              startColor: "",
                              endColor: "",
                              image: item2?.image,
                            });

                        setShowBG(false);
                      }}
                      key={index2}
                      style={{
                        background: index == 2 ? item2 : `url(${item2?.image})`,
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center center",
                      }}
                      className="h-[80px] cursor-pointer rounded-xl w-full"
                      initial={{ opacity: 0, scale: 0.8 }} // Initial state
                      animate={{ opacity: 1, scale: 1 }} // Animate to this state
                      whileHover={{ scale: 1.05 }} // Animation on hover
                      whileTap={{ scale: 0.95 }} // Animation when clicked
                      transition={{ duration: 0.3 }} // Animation duration
                    ></motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundThemes;
