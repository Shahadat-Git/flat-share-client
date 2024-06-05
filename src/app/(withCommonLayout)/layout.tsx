import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(
  () => import("@/components/shared/Navbar/Navbar"),
  {
    ssr: false,
  }
);

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <DynamicNavbar />
      {children}
      <Footer />
    </Box>
  );
};

export default CommonLayout;
