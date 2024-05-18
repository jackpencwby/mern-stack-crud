import FormProduct from './components/FormProduct.jsx'
import FormEditProduct from './components/FormEditProduct.jsx';
import Register from './components/pages/auth/Register.jsx';
import Login from './components/pages/auth/Login.jsx';
import HeaderBar from "./layout/HeaderBar";
import SideBar from "./layout/SideBar";
import { CssBaseline, Box, TextField } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<>
				<Routes>
					<Route path='/register' element={<Register />} />
				</Routes>
				<Routes>
					<Route path='/login' element={<Login />} />
				</Routes>
				<Routes>
					<Route path='admin/table' element={<FormProduct />} />
					{/* <Route path='admin/table/edit/' element={<FormEditProduct />} /> */}
				</Routes>
				{/* <CssBaseline />
				<div className="app">
					<SideBar />
					<main className="content">
						<HeaderBar />
						<div className="content_body">
							<Box m="20px">
								<Routes>
									<Route path='admin/table' element={<FormProduct/>}/>
									<Route path='admin/table/edit/' element={<FormEditProduct/>}/>
								</Routes>
							</Box>
						</div>
					</main >
				</div > */}
			</>
		</BrowserRouter>
	)
}

export default App;
