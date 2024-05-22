import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { updateProduct } from '../../../fetchs/product.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

function FormEditProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const updateItem = async (e) => {
        try {
            e.preventDefault();

            let formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("file", file);

            await updateProduct(id, formData);

            toast.success("เเก้ไขข้อมูลสินค้าสำเร็จ", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setName("");
            setPrice("");
            setFile({});

            navigate("/admin/table/products");
        }
        catch (error) {
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white" }}>ฟอร์มเเก้ไขข้อมูลสินค้า</h1>
            <form onSubmit={updateItem} encType='multipart/form-data' style={{ marginBottom: "36px" }}>
                <h2 style={{ color: "white" }}>เเก้ไขข้อมูลสินค้า ({id})</h2>
                <div>
                    <TextField
                        type="text"
                        label="ชื่อสินค้า"
                        variant="outlined"
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
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        type="text"
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
                        onChange={(e) => setPrice(e.target.value)}
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
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div>
                    <Button variant="contained" type='submit'>เเก้ไข</Button>
                </div>
            </form>
        </div>
    )
}

export default FormEditProduct;