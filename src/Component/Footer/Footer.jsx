import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" bottom-0 left-0 w-full h-[600px] bg-black pt-[30px]">
            <div className="flex h-[500px] ml-[50px] mr-[50px] border-gray-600 border-b-2">
                <div className="w-3/5 h-full flex justify-start items-start mt-[50px]">
                    <NavLink to="/Home" className="w-auto">
                        <div className="flex justify-start items-start">
                            <img src="./img/logoPage.png" alt="logo" className="w-[70%] h-[100%]" />
                        </div>
                    </NavLink>
                    <span className="w-3/5 h-auto text-white text-left text-[20px] ml-[50px] mr-[180px] mt-[40px] whitespace-normal ">
                        Mang lại trải nghiệm giải trí tuyệt vời trong từng thước phim
                    </span>
                </div>

                <div className="w-full flex">
                    {/*NỘI DUNG*/}
                    <div className="w-1/3 h-full flex items-start flex-col  mr-[30px]">
                        <span className="text-white text-[35px]  mt-[30px] mb-[30px]">Nội dung</span>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Trang chủ</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Anime</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Series</span>
                            </NavLink>
                        </div>
                    </div>

                    {/*DỊCH VỤ*/}
                    <div className="w-1/3 h-full flex items-start flex-col  mr-[30px]  ">
                        <span className="text-white text-[35px]  mt-[30px] mb-[30px]">Dịch vụ</span>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Trang chủ</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Blog</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Nội dung</span>
                            </NavLink>
                        </div>
                    </div>

                    {/*HỖ TRỢ*/}
                    <div className="w-1/3 h-full flex items-start flex-col mr-[60px]">
                        <span className="text-white text-[35px] mt-[30px] mb-[30px]">Hỗ trợ</span>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white  text-[20px] mt-[30px]">
                                <span>FAQs</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Quyền riêng tư</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Trách nhiệm người dùng</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Giới hạn trách nhiệm</span>
                            </NavLink>
                        </div>
                        <div className="inline-block my-[15px] text-left">
                            <NavLink to="/Home" className="text-white text-[20px] mt-[30px]">
                                <span>Chính sách và quy trình xử lý khiếu nại</span>
                            </NavLink>
                        </div>
                    </div>

                    {/*Công ty*/}
                    <div className="w-[60%] h-full flex items-start flex-col ">
                        <span className="text-white text-left text-[35px] mt-[30px] mb-[50px]">Công ty trách nhiệm hữu hạn một mình tao</span>
                        <span className="text-white text-left text-[20px]">Địa chỉ: 123 Trần Duy Hưng, Hong Kong, California, Trung tâm kiểm soát động vật hoang dã, New York,dwajkdah ưqjdhqk</span>
                        <span className="text-white text-[20px] mt-[30px]">Giới hạn trách nhiệm</span>
                        <div className="inline-block my-[15px] mt-[30px]">
                            <span className="text-white text-[20px] mt-[30px]">Email: </span>
                            <NavLink to="/Hacking" className="text-orange-600 text-[20px] mt-[30px]">
                                <span>Bấmvàobayacc@gmail.com</span>
                            </NavLink>
                        </div>
                    </div>


                </div>
            </div>
            <div className=" h-[50px] mr-[50px] ml-[50px] ">
                <div className=" w-1/3">
                    <NavLink to="/Home">
                        <span className="text-white flex justify-start ml-[50px]">Xem anime</span>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};
export default Footer;