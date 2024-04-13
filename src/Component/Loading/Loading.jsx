import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex-1 flex justify-center items-center">
        <h1 className="font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl">Lỗi kết nối đến máy chủ</h1>
      </div>
      <div className="">
        <img src="../../img/anhdep.jpg" className="h-screen"/>
      </div>
    </div>
  );
};

export default Loading;