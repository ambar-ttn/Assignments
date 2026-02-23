"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  // If already logged in → start countdown
  useEffect(() => {
    if (session) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
        router.push("/dashboard");
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [session, router]);

  if (session) {
    return (
      <div className="center">
        <h2>Already logged in</h2>
        <p>Redirecting you in {seconds}...</p>
      </div>
    );
  }

  return (
    <div className="center">
      <h2>Login</h2>
      <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        Sign in with Google
      </button>
    </div>
  );
}