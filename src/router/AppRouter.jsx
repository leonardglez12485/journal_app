import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoute } from "../journal/routes/JournalRoute";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoute />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* Login and register */}
      {/* <Route path="auth/*" element={<AuthRoutes/>} /> */}

      {/* App Journal */}
      {/* <Route path="/*" element={<JournalRoute/>} /> */}
    </Routes>
  );
};
