import React, { useRef, useState } from 'react'

export default function ItemProfile({ title, placeholder, initialValue }) {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(initialValue);
    const inputValueRef = useRef(value);

    const handleClickEdit = () => {
        setEditMode(true);
        inputValueRef.current = value;
    }

    const handleSave = () => {
        setEditMode(false);
    }

    const handleCancle = () => {
        setEditMode(false);
        setValue(inputValueRef.current);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className="mb-4">
                <div className="flex justify-between py-[16px]">
                    <div className='flex flex-col items-start'>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            placeholder={placeholder}
                            readOnly={!editMode}
                            className="border-b border-gray-200 focus:outline-none py-[5px] px-[10px] w-[200%]"
                        />
                    </div>
                    <div>
                        {editMode ? (
                            <div>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-gray-600 mr-2"
                                >
                                    Lưu
                                </button>
                                <button onClick={handleCancle}>
                                    Hủy
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={handleClickEdit}
                                className={`
                                ${editMode ? 'bg-gray-500' : 'bg-red-500'} 
                                text-white px-3 py-1 rounded-full hover:bg-gray-600
                            `}
                            >
                                {/* <button className='bg-red-500 text-white px-3 py-1 rounded-full hover:bg-gray-600'> */}
                                Chỉnh sửa
                                {/* </button> */}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}
