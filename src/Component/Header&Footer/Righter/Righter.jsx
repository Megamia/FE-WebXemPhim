import React from "react";
import { FaPlay } from "react-icons/fa";
import { FacebookProvider, Comments } from "react-facebook";
import TopRank from "../../Home/TopRank/TopRank";
const Righter = () => {
  return (
    <div className="bg-[#141414] text-white w-full flex flex-col gap-[10px]">
      <div className="bg-[#181D1F] p-[10px] rounded flex flex-col ">
        <div className=" border-b-[3px] border-[#B5E745]">
          <p className="font-bold">Hôm nay xem gì?</p>
        </div>
        <div className="mt-[20px] flex flex-row">
          <p>
            Nếu bạn buồn phiền không biết xem gì hôm nay. Hãy để chúng tôi chọn
            cho bạn
          </p>
        </div>
        <div className="bg-red-500 text-white my-[10px] py-[5px] px-[10px] rounded-[5px] flex">
          <button className="flex flex-1 justify-end items-center">
            <FaPlay className="" />
            <a
              href="https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/96/68/1616116896/1616116896-1-192.mp4?e=ig8euxZM2rNcNbNM7bdVhwdlhbKjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1721189238&gen=playurlv2&os=cosbv&oi=2018263300&trid=4853f5a6ff4d446392d7c08e7c66f803T&mid=3546655628462543&platform=html5&og=cos&upsig=862e7c238e4e0249a77d7b50ba3c633d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&bw=247185&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000"
              className="flex-1 flex justify-center"
            >
              Xem Phim Ngẫu nhiên
            </a>
          </button>
        </div>
      </div>
      <div className="bg-[#181D1F] p-[10px] rounded flex flex-col ">
        <div>
          <img
            src="../../img/gif.gif"
            alt="video"
            className="w-[100%] rounded"
          />
        </div>
        <div className=" border-b-[3px] border-[#B5E745] mt-2">
          <p className="font-bold">Hỏi/đáp phim</p>
        </div>
        <div className="bg-white rounded mt-3">
          <FacebookProvider appId="265046719974622">
            <Comments
              href={`https://fe-megami.vercel.app/`}
              width="100%"
              numPosts={3}
              locale="vi_VN"
            />
          </FacebookProvider>
        </div>
      </div>
      <div className="bg-[#181D1F] p-[10px] rounded flex flex-col ">
        <TopRank />
      </div>
    </div>
  );
};
export default Righter;
