"use client";
import { useContext, useEffect } from "react";
import { LoadingContext } from "./context/Loadingcontext";
export default function UsersPage() {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);

     setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(() => setLoading(false));
     },2000)
  }, []);

  if (loading) return <p>Loading...</p>;

  return <p>Users Data Loaded</p>;
}
