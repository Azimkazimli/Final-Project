"use client";
import { useRouter } from "next/navigation";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";
import { useUser } from "@/Components/UserContext";

const LogoutButton = () => {
  const router = useRouter();
  const { logoutUser } = useUser();

  const [alert, setAlert] = useState(false);

  const handleLogout = () => {
    logoutUser(); 
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
      router.push("/");
    }, 1500);
  };

  return (
    <>
      {alert && (
        <div className="alert-toast">
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            You have been logged out.
          </Alert>
        </div>
      )}

      <RiLogoutBoxRLine
        className="logout-icon"
        onClick={handleLogout}
        title="Logout"
      />
    </>
  );
};

export default LogoutButton;
