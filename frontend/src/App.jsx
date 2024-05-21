import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import AdminRoutes from "./routes/AdminRoutes";
import HomepageAdmin from "./components/pages/admin/HomepageAdmin";
import FormProduct from "./components/pages/admin/FormProduct";
import FormEditProduct from "./components/pages/admin/FormEditProduct";
import ManageAdmin from "./components/pages/admin/ManageAdmin";
import ManageUser from "./components/pages/admin/ManageUser";
import UserRoutes from "./routes/UserRoutes";
import HomePageUser from "./components/pages/user/HomePageUser";
import NotFound404 from "./components/pages/NotFound404";
import HomePage from "./components/pages/HomePage";

function App() {
	return (
		<BrowserRouter>
			<>
				<Routes>
					<Route path="*" element={<NotFound404 />} />

					<Route path="/" element={<HomePage />} />

					<Route path="register" element={<Register />} />

					<Route path="login" element={<Login />} />

					<Route path="/admin/home" element={
						<AdminRoutes>
							<HomepageAdmin />
						</AdminRoutes>
					}
					/>
					<Route path="/admin/table/products" element={
						<AdminRoutes>
							<FormProduct />
						</AdminRoutes>
					}
					/>
					<Route path="/admin/table/products/edit/:id" element={
						<AdminRoutes>
							<FormEditProduct />
						</AdminRoutes>
					}
					/>
					<Route path="/admin/manage-admin" element={
						<AdminRoutes>
							<ManageAdmin />
						</AdminRoutes>
					}
					/>
					<Route path="/admin/manage-user" element={
						<AdminRoutes>
							<ManageUser />
						</AdminRoutes>
					}
					/>
					<Route path="user/homepage" element={
						<UserRoutes>
							<HomePageUser />
						</UserRoutes>
					}
					/>
				</Routes>
			</>
		</BrowserRouter>
	)
}

export default App;
