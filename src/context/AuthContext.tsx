"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import firebase_app from "@/firebase/config";
import { QueryClient, QueryClientProvider } from "react-query";
import { Alert, Box } from "@mui/material";

const auth = getAuth(firebase_app);

// Create a client
const queryClient = new QueryClient();

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    signOut(auth);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        // Redirect to a specific page if the user is authenticated
        //  router.push('/admin/dashboard'); // Change '/dashboard' to your desired page
      } else {
        setUser(null);
        // Redirect to login page if the user is not authenticated
        // router.push('/signin'); // Change '/login' to your login page
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <Box sx={{ position: "fixed", bottom: 35, right: 25 , width:"280px",zIndex:1500}}>
          <Alert variant="filled" severity="success">
          This is a filled success Alert.  This is a filled success Alert.  This is a filled success Alert.
          </Alert>
        </Box> */}
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};
