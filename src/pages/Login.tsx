import { useEffect, useState } from "react";
import { useAuth } from "../context/store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return navigate("/");
  });

  return (
    !isAuthenticated && (
      <>
        <div className="fixed inset-0 flex items-center justify-center z-20 text-black">
          <form onSubmit={() => {
            if (
              user.name === "mttv_end_client" &&
              user.password == "fhwwuf[]h12"
            ) {
              localStorage.setItem("authenticated", "true");
              setIsAuthenticated(true);
              navigate("/");
            }
          }} className="w-max h-[200px] bg-white border rounded-md flex flex-col gap-y-4 p-4 justify-center">
            <div className="flex items-center gap-x-3">
              <label htmlFor="username" className="w-20">
                Username
              </label>
              <input
                className="p-2 rounded-md border"
                id="username"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-x-3">
              <label htmlFor="password" className="w-20">
                Password
              </label>
              <input
                className="p-2 rounded-md border"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="border px-3 py-2 rounded-md bg-black text-white hover:bg-opacity-75 transition"
            >
              Login
            </button>
          </form>
        </div>
      </>
    )
  );
}
