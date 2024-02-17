import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./layout"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout><span>Home page</span></Layout>} />
            <Route path="/user-profile" element={<span>User Profile page</span>} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    )
}