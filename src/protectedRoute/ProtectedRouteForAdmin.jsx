import { Navigate } from "react-router";

export const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));

  if (user?.role === "admin") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// This page is a protected page for an Admin. When a user tries to access the admin page, it checks the role of the logged-in person.

// If the logged-in person's role is "user," they will be redirected to the login page.

// This means random users cannot access the admin page without proper admin permissions.
