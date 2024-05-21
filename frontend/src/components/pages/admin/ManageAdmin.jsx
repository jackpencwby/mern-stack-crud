import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getAdminData } from '../../../fetchs/user';

function ManageAdmin() {

	const [adminData, setAdminData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await getAdminData();
		const adminData = response.data;
		setAdminData(adminData.map(data => {
			const birthdayNewFormat = data.birthday.split("T")[0];
			return { ...data, birthday: birthdayNewFormat };
		})
		);

	};

	return (
		<div>
			<h1 style={{ color: "white", textAlign: "center" }}>ตารางเเสดงข้อมูลของ Admin</h1>
			<TableContainer component={Paper} >
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>ไอดี</TableCell>
							<TableCell>ชื่อ</TableCell>
							<TableCell>วันเกิด</TableCell>
							<TableCell>เบอร์โทรศัพท์</TableCell>
							<TableCell>อีเมล</TableCell>
							<TableCell>รหัสผ่าน</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{adminData.map((data) => (
							<TableRow
								key={data._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell>{data._id}</TableCell>
								<TableCell>{data.fullname}</TableCell>
								<TableCell>{data.birthday}</TableCell>
								<TableCell>{data.phone_number}</TableCell>
								<TableCell>{data.email}</TableCell>
								<TableCell>{data.password}</TableCell>
								{/* <TableCell>
									<Link to={`/admin/table/products/edit/${product._id}`} >
										<EditIcon color='warning' />
									</Link>
								</TableCell>
								<TableCell><DeleteIcon color='error' onClick={() => deleteProduct(product._id)} /></TableCell> */}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default ManageAdmin;