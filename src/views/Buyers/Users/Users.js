import React, { useEffect, useState } from "react";

function Users() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);
  return <div>users : {msg.length ? msg : "loading..."}</div>;
}

export default Users;
