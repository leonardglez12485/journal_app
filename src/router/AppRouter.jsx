import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoute } from '../journal/routes/JournalRoute'


export const AppRouter = () => {
  return (
    <Routes>
        {/* Login and register */}
        <Route path="auth/*" element={<AuthRoutes/>} />
        
        {/* App Journal */}
        <Route path="/*" element={<JournalRoute/>} />
    </Routes>
  )
}
