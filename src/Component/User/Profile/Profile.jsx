import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div>
            {/* Header */}
            <header className="bg-black opacity-90 p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="./img/logoPgae.png" alt="Logo" className="w-16 h-16 mr-2" />
                    <h1 className="text-white text-3xl font-semibold">User Profile</h1>
                </div>
                <div className="flex items-center">
                    <button className="bg-white rounded-full px-3 py-1 mr-2">
                        Quay lại
                    </button>
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="border rounded px-2 py-1 focus:outline-none"
                    />
                    <div className="ml-4">
                        <FontAwesomeIcon icon={faUserCheck} className="text-white text-2xl" />
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="bg-white p-4 m-4 h-screen w-1/4 border-none">
                    <ul>
                        <li className="mb-4">
                            <a href="/profile-settings" className="hover:underline">
                                Cài đặt profile
                            </a>
                        </li>
                        {/* Thêm các phần điều hướng khác tại đây */}
                    </ul>
                </aside>

                {/* Main Content */}
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
                                        <img src="./img/avatarUser.jpg" alt="" className='w-[90px] h-[90px] ml-[90px]'/>
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
                    {/* Thêm nội dung khác vào phần Main Content tại đây */}
                </main>
            </div>
            {/* thêm <footer></footer> */}
        </div>
    );
};

export default Profile;
