import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#205e7f] to-[#76b4b9] h-[100vh] py-2 px-2 md:py-16 md:px-16">
      <main className="h-full flex  bg-white rounded-[2.5rem] w-[100%] md:w-[80%] mx-auto">
          {children}
      </main>
    </div>
  );
};

export default AuthLayout;
