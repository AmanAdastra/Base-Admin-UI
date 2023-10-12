import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#205e7f] to-[#76b4b9] h-[100vh] py-16 px-16">
      <main className="h-full flex  bg-white rounded-[2.5rem] w-[80%] mx-auto">
          {children}
      </main>
    </div>
  );
};

export default AuthLayout;
