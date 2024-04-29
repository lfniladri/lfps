"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.replace("/signin");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
