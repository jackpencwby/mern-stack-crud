import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getData, addData, deleteData } from '../fetchs/product.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function FormProduct() {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState({});

    useEffect(() => {
        getAllProduct();
    }, [])

    const getAllProduct = async () => {
        const response = await getData();
        setProducts(response.data);
    }

    const addProduct = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("file", file);

        await addData(formData);
        await getAllProduct();

        setName("");
        setPrice(0);
        setFile({});
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

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>ฟอร์มเเสดงรายการสินค้าเเละเพิ่มรายการสินค้า</h1>
            <form onSubmit={addProduct} encType='multipart/form-data'>
                <h2>เพิ่มรายการสินค้า</h2>
                <div>
                    <TextField
                        type="text"
                        label="ชื่อสินค้า"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                color: "white",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontWeight: "bold",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                    borderWidth: "2px",
                                },
                            },
                            "& .MuiInputLabel-outlined": {
                                color: "white",
                                fontWeight: "bold",
                            },
                        }}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <TextField
                        type="number"
                        label="ราคา"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                color: "white",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontWeight: "bold",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                    borderWidth: "2px",
                                },
                            },
                            "& .MuiInputLabel-outlined": {
                                color: "white",
                                fontWeight: "bold",
                            },
                        }}
                        onChange={handlePriceChange}
                    />
                </div>
                <div>
                    <TextField
                        type="file"
                        label="ไฟล์รูปภาพ"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                color: "white",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontWeight: "bold",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                    borderWidth: "2px",
                                },
                            },
                            "& .MuiInputLabel-outlined": {
                                color: "white",
                                fontWeight: "bold",
                            },
                        }}
                        focused
                        onChange={handleFileChange}
                    />
                </div>
                <div>
                    <Button variant="contained" type='submit'>เพิ่ม</Button>
                </div>
            </form>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>รหัสสินค้า</TableCell>
                            <TableCell>ชื่อสินค้า</TableCell>
                            <TableCell>ราคา</TableCell>
                            <TableCell>ไฟล์รูปภาพ</TableCell>
                            <TableCell>เเก้ไช</TableCell>
                            <TableCell>ลบ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{product._id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.image}</TableCell>
                                <TableCell>
                                    <Link to={`edit/?id=${product._id}`} >
                                        <EditIcon color='warning' />
                                    </Link>
                                </TableCell>
                                <TableCell><DeleteIcon color='error' onClick={() => deleteProduct(product._id)}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default FormProduct