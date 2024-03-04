import React, { useEffect, useState } from 'react';
import Header from '../../Header&Footer/Header/Header';
import Footer from '../../Header&Footer/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import styles from './style.module.scss'
import axios from 'axios';
import Profile from './ProfileCON/Profile';
import Test2 from '../../Test/Test2';
import Test3 from '../../Test/Test3';

const ProfileCHA = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [pasword, setPasword] = useState('');
    const [phone, setPhone] = useState('');
    const [currentPage, setCurrentPage] = useState('Profile');
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        navigate('/Home');
    };

    useEffect(() => {
        document.title = 'Thông tin cá nhân';

    }, []);
    useEffect(() => {
        const storedLoggedInStatus = localStorage.getItem("isLoggedIn");

        if (storedLoggedInStatus === "true") {
            setIsLoggedIn(true);
        }

        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            axios.get("http://localhost:4000/api/profile", {
                headers: {
                    Authorization: `Bearer ${storedToken}`
                }
            })
                .then(response => {
                    setUser(response.data.userInfo);
                    setUsername(response.data.userInfo.username);
                    setFullname(response.data.userInfo.fullname);
                    setEmail(response.data.userInfo.email);
                    setEmail(response.data.userInfo.pasword);
                    setPhone(response.data.userInfo.phone);
                })
                .catch(error => {
                    console.error('Error fetching user profile:', error);
                });
        }
    }, []);
    const handleUpdate = () => {
        axios.post('http://localhost:4000/api/profile', {
            username: username,
            fullname: fullname,
            email: email,
            pasword: pasword,
            phone: phone
        })
            .then(response => {
                console.log('Thông tin đã được cập nhật thành công:', response.data);
                alert("Sửa thông tin thành công");
            })
            .catch(error => {
                console.error('Lỗi khi cập nhật thông tin:', error);
                alert("Sửa thông tin thất bại");
            });
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const renderPage = () => {
        switch (currentPage) {
            case 'Profile':
                return <Profile />;
            case 'Test2':
                return <Test2 />;
            case 'Test3':
                return <Test3 />;
            default:
                return null;
        }
    };
    return (
        <div className='flex flex-col flex-1 bg-[#F9F9FB]'>
            <div>
                <Header />
            </div>
            <div className="flex flex-row mt-[100px] p-[35px] bg-[#F9F9FB]">
                <div className="flex flex-col w-[300px] border-r-[2px] border-[#F9F9FB] bg-white ">
                    <div className='flex flex-col my-[35px]'>
                        <div className="flex flex-col items-center mb-[30px]">
                            <img src="../../img/AVT/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="?" className="w-[50%]" />
                            <div className='flex text-black mt-[10px]'>
                                {fullname !== null && fullname !== '' ? fullname : "User didn't set fullname"}
                            </div>
                            <div className='flex text-black mt-[10px]'>
                                {email !== null && email !== '' ? email : "User didn't set email"}
                            </div>
                            <div className='flex text-black mt-[10px]'>
                                {phone !== null && phone !== '' ? phone : "User didn't set phone"}
                            </div>
                        </div>
                        <div className=''>
                            <div className={`flex flex-col ${styles.sidebar}`}>
                                <ul class={`flex flex-col ${styles.nav}`}>
                                    <li className={`${currentPage === 'Profile' ? styles.active : ''} flex flex-1 flex-row items-center`} onClick={() => handlePageChange('Profile')}>
                                        <FaUser className=' mr-[10px] ' />
                                        <span className=''>
                                            Profile
                                        </span>
                                    </li>
                                    <li className={`${currentPage === 'Test2' ? styles.active : ''} flex flex-1 flex-row items-center`} onClick={() => handlePageChange('Test2')}>
                                        <IoIosSettings className=' mr-[10px] ' />
                                        <span className=''>
                                            Setting
                                        </span>
                                    </li>
                                    <li className={`${currentPage === 'Test3' ? styles.active : ''} flex flex-1 flex-row items-center`} onClick={() => handlePageChange('Test3')}>
                                        <IoMdMail className=' mr-[10px] ' />
                                        <span className=''>
                                            Messages
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' flex flex-1 h-full bg-white'>
                    <div className='flex flex-1 my-[35px]'>
                        {renderPage()}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ProfileCHA;
