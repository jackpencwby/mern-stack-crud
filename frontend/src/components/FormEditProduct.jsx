import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { updateData } from '../fetchs/product.jsx';

function FormEditProduct() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [detail, setDetail] = useState("");


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    }

    const updateProduct = async (e) => {
        e.preventDefault();

        const newData = {
            name,
            price,
            detail
        }

        await updateData(id, newData);

        alert("เเก้ไขข้อมูสสินค้าสำเร็จเเล้ว");

        navigate("/");
    }

    return (
        <div>
            <h2>ฟอร์มเเก้ไขรายการสินค้า</h2>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor="">ชื่อสินค้า : </label>
                    <input type='text' value={name} onChange={handleNameChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="">ราคา : </label>
                    <input type='number' value={price} onChange={handlePriceChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="">รายละเอียด : </label>
                    <input type='text' value={detail} onChange={handleDetailChange} />
                </div>
                <br />
                <div>
                    <button>เเก้ไข</button>
                </div>
            </form>
        </div>
    )
}

export default FormEditProduct;