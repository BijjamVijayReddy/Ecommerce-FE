import { useEffect, useState } from "react";
import AppRoutes from "../src/appRoutes/AppRoutes";
import { useNavigate } from 'react-router-dom';
import sessionService from "./services/sessionServices";
import Internet from "../src/utlity/InternetTracker/Internet";



function App() {
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleOnline = () => {
      setIsOnline(true); 
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  /* useEffect(() => {
    if (!initialized) {
      const token = sessionService.getToken();
      if (token) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
      setInitialized(true);
    }
  }, [navigate, initialized]); */

  return (
    <div>  
       {!isOnline ? <Internet /> : <AppRoutes />}
    </div>
  );
}

export default App;
