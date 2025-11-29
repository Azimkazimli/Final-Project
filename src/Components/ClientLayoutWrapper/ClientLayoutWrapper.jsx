"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "../Loading/Loading";

export default function ClientLayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // İlk girişdə loading göstər
  useEffect(() => {
    setLoading(true);
  }, []);

  // Səhifə dəyişəndə loading aç
  useEffect(() => {
    setLoading(true);
  }, [pathname]);

  // Səhifə render olunub bitəndə loading bağla
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 0); // saniyə YOX. sadəcə repaint gözləyir

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}
