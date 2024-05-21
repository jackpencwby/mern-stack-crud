import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { getAdminData, changeRole } from '../../../fetchs/user';
import { toast } from 'react-toastify';

function ManageAdmin() {
	const [adminData, setAdminData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const response = await getAdminData();
			const adminData = response.data;
			setAdminData(adminData.map(data => {
				const birthdayNewFormat = data.birthday.split("T")[0];
				return { ...data, birthday: birthdayNewFormat };
			})
			);
		}
		catch (error) {
			console.log(error);
		}
	};

	const changeRoleToUser = async (id) => {
		try {
			await changeRole(id);
			await getData();

			toast.warning("เปลี่ยนสถานะเป็น User สำเร็จ", {
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
		catch (error) {
			console.log(error);
		}
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
							<TableCell align='center'>เปลี่ยนสถานะ ( Role )</TableCell>
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
								<TableCell align='center'>
									<Link>
										<ChangeCircleIcon onClick={() => changeRoleToUser(data._id)} />
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default ManageAdmin;