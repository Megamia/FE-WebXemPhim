import React, {useEffect} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header/Header';

const Profile = () => {

    useEffect (() => {
        document.title = "Thông tin cá nhân";
      },[]);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="flex mt-[100px]">
                <aside className="bg-white p-4 m-4 h-screen w-1/4 border-none">
                    <ul>
                        <li className="mb-4">
                            <a href="/profile-settings" className="hover:underline">
                                Cài đặt profile
                            </a>
                        </li>
                    </ul>
                </aside>

                <main className="p-4 w-3/4">
                    <div className="bg-white p-6 border-none h-screen">
                        <div className="mb-4">
                            <div className="flex justify-between py-[16px]">
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-xl font-semibold">Họ và tên</h3>
                                    <input type="text" className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]" />
                                </div>
                                <div>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-full">
                                        Chỉnh sửa
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between py-[16px]">
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-xl font-semibold">Avatar</h3>
                                    <div className='flex justify-between'>
                                        <div>Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.</div>
                                        <img src="./img/avatarUser.jpg" alt="" className='w-[90px] h-[90px] ml-[90px]' />
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-full">
                                        Chỉnh sửa
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between py-[16px]">
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-xl font-semibold">Email</h3>
                                    <input type="text" className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]" />
                                </div>
                                <div>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-full">
                                        Chỉnh sửa
                                    </button>
                                </div>
                            </div>
                        </div><div className="mb-4">
                            <div className="flex justify-between py-[16px]">
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-xl font-semibold">Số điện thoại</h3>
                                    <input type="text" className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]" />
                                </div>
                                <div>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-full">
                                        Chỉnh sửa
                                    </button>
                                </div>
                            </div>
                        </div><div className="mb-4">
                            <div className="flex justify-between py-[16px]">
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-xl font-semibold">Username</h3>
                                    <input type="text" className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]" />
                                </div>
                                <div>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-full">
                                        Chỉnh sửa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;
