import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { updateData } from '../fetchs/product.jsx';

function FormEditProduct() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState({});


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const updateProduct = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("file", file);

        await updateData(id, formData);

        alert("เเก้ไขข้อมูสสินค้าสำเร็จเเล้ว");

        navigate("/");
    }

    return (
        <div style={{marginTop: "54px"}}>
            <h2>ฟอร์มเเก้ไขรายการสินค้า ({id})</h2>
            <form onSubmit={updateProduct} encType='multipart/form-data'>
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
                    <label htmlFor="">รูปภาพ : </label>
                    <input type='file' onChange={handleFileChange} />
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