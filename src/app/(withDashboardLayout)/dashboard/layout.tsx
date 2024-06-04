"use client";
import DashboardDrawer from "@/components/dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/actions/authServices";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;