import React from "react";

import { Text, Img } from "components";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-raleway items-end justify-end mx-[auto] sm:pl-[20px] pl-[21px] pt-[21px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] gap-[70px] items-start justify-end md:px-[20px] md:w-[100%] w-[96%]">
          <div className="flex flex-col justify-start md:mt-[0] mt-[18px] md:w-[100%] w-[38%]">
            <Text
              className="not-italic text-black_900 text-left tracking-[7.20px] w-[auto]"
              as="h1"
              variant="h1"
            ></Text>
            <div className="font-almarai h-[172px] md:h-[431px] md:ml-[0] ml-[41px] mt-[259px] relative sm:w-[100%] w-[92%]">
              <Text
                className="m-[auto] not-italic text-indigo_A400 text-left tracking-[7.00px]"
                as="h5"
                variant="h5"
              >
                <>
                  Comment
                  <br />
                  In
                </>
              </Text>
              <Img
                src="images/img_group13.svg"
                className="absolute bottom-[5%] h-[20px] left-[21%] w-[auto]"
                alt="groupThirteen"
              />
            </div>
            <Text
              className="font-light md:ml-[0] ml-[89px] mt-[27px] text-center text-gray_900_ab tracking-[1.20px] w-[auto]"
              as="h3"
              variant="h3"
            >
              Rate, review, and discuss everything..{" "}
            </Text>
            <div className="bg-white_A700 flex font-raleway items-center justify-start md:ml-[0] ml-[17px] mr-[208px] mt-[89px] pb-[6px] px-[6px] rounded-bl-[41px] rounded-br-[144px] rounded-tl-[0] rounded-tr-[144px] md:w-[100%] w-[57%]">
              <div className="bg-indigo_A200 flex h-[83px] md:h-[auto] items-start justify-start mb-[4px] pl-[40px] md:pr-[40px] pr-[57px] sm:px-[20px] py-[24px] rounded-[40px] w-[271px]">
                <Text
                  className="leading-[18.00px] md:max-w-[100%] max-w-[234px] text-center text-white_A700"
                  as="h2"
                  variant="h2"
                >
                  Continue without signing in
                </Text>
              </div>
            </div>
            <Img
              src="images/img_socialmedia.svg"
              className="h-[32px] md:ml-[0] ml-[59px] mt-[80px] w-[auto]"
              alt="socialmedia"
            />
          </div>
          <div className="h-[1024px] relative md:w-[100%] w-[58%]">
            <div className="h-[1024px] m-[auto] w-[100%]">
              <Img
                src="images/img_image2.png"
                className="h-[1024px] m-[auto] object-cover w-[100%]"
                alt="imageTwo"
              />
              <div className="absolute bg-indigo_A200_d3 h-[37px] right-[5%] shadow-bs top-[3%] w-[15%]"></div>
            </div>
            <div className="absolute flex flex-col md:gap-[40px] gap-[752px] h-[max-content] inset-y-[0] justify-start my-[auto] right-[5%] w-[83%]">
              <div className="flex flex-row items-start justify-end ml-[auto] md:w-[100%] w-[51%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  About
                </Text>
                <Text
                  className="font-semibold ml-[53px] text-black_900 text-left text-shadow-ts w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Contact Us
                </Text>
                <Text
                  className="font-semibold ml-[35px] text-left text-shadow-ts1 text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Sign up
                </Text>
              </div>
              <div className="bg-white_A700 border-[1px] border-bluegray_900 border-solid flex font-poppins items-center justify-start px-[8px] rounded-[20px] shadow-bs1 w-[100%]">
                <Text
                  className="not-italic text-black_900 text-center w-[100%]"
                  as="h4"
                  variant="h4"
                >
                  A website where people can comment, review and discuss
                  different things like movies and more is a great way to share
                  your passion with others.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
