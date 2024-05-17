import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getData, addData, deleteData } from '../fetchs/product.jsx';
import "./FormProduct.css"

function FormProduct() {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [detail, setDetail] = useState("");

    useEffect(() => {
        getAllProduct();
    }, [])

    const getAllProduct = async () => {
        const response = await getData();
        setProducts(response.data);
    }

    const addProduct = async (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            price,
            detail
        };
        await addData(newProduct);
        await getAllProduct();
        setName("");
        setPrice(0);
        setDetail("");
    }

    const deleteProduct = async (id) => {
        await deleteData(id);
        await getAllProduct();
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    }

    return (
        <div>
            <h2>ฟอร์มเเสดงรายการสินค้าเเละเพิ่มรายการสินค้า</h2>
            <form onSubmit={addProduct}>
                <h3>เพิ่มรายการสินค้า</h3>
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
                    <button>เพิ่ม</button>
                </div>
            </form>

            <div className="table">
                <h3>สินค้าทั้งหมด</h3>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">รหัสสินค้า</th>
                            <th scope="col">ชื่อสินค้า</th>
                            <th scope="col">ราคา</th>
                            <th scope="col">รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            return (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.detail}</td>
                                    <td>
                                        <Link to={`product/${product._id}`}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => deleteProduct(product._id)}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FormProduct