import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch("localhost:5000/user", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => console.log("data inside token", data));
    }
  }, [user]);
  return [token];
};
export default useToken;
