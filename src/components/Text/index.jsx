import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  h2: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  h3: "text-[20px]",
  h4: "font-normal text-[15px]",
  h5: "font-normal text-[100px] sm:text-[48px] md:text-[48px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
