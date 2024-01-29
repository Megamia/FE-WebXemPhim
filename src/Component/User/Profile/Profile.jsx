import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header&Footer/Header/Header';
import ItemProfile from './itemProfile';
import Footer from '../../Header&Footer/Footer/Footer';

const Profile = () => {
    const [avatar, setAvatar] = useState('./img/avatarUser.jpg');
    const handleEditAvatar = () => {
        document.getElementById("avatarInput").click();
    }
    const handelImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setAvatar(imageUrl);
        }
    }
    useEffect(() => {
        document.title = "Thông tin cá nhân";
    }, []);

    return (
        <div>
            <div>
                <Header />
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
                        <ItemProfile title={"Họ và Tên"} placeholder={"Thêm tên của bạn"} />
                        <div className="mb-4">
                            <div className="flex justify-between py-[16px]">
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-xl font-semibold">Ảnh đại diện</h3>
                                    <div className='flex justify-between'>
                                        <div>Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.</div>
                                        <img src={avatar} alt="" className='w-[90px] h-[90px] ml-[90px]' />
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        id='avatarInput'
                                        accept='.jpg, .png, .gif'
                                        style={{ display: 'none' }}
                                        onChange={handelImageChange}
                                    />
                                    <button
                                        onClick={handleEditAvatar}
                                        className="bg-red-500 text-white px-3 py-1 rounded-full"
                                    >
                                        Chỉnh sửa
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ItemProfile title={"Email"} placeholder={"Thêm email của bạn"} />
                        <ItemProfile title={"Số điện thoại"} placeholder={"Thêm số điện thoại của bạn"} />
                        <div className="mb-4">
                            <div className="flex justify-between py-[16px]">
                                <div className='flex flex-col items-start'>
                                    <h3 className="text-xl font-semibold">Tên đăng nhập</h3>
                                    <input
                                        type="text"
                                        placeholder='Tên đăng nhập'
                                        className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Profile;
