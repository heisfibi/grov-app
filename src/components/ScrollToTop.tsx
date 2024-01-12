import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { leaveFixed } from "../helper/Functions";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}