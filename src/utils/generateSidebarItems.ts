import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";

import KeyIcon from "@mui/icons-material/Key";
import { TSideBarItem, TUserRole } from "@/types";
import { USER_ROLE } from "@/constants/role";
import ApartmentIcon from "@mui/icons-material/Apartment";
export const generateSideBarItems = (role: TUserRole): TSideBarItem[] => {
  const menuItems: TSideBarItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `profile`,
      icon: CalendarMonthIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      menuItems.push(
        {
          title: "User Management",
          path: `${role}/user-manage`,
          icon: GroupIcon,
        },
        {
          title: "Flat Management",
          path: `${role}/flat-manage`,
          icon: ApartmentIcon,
        },
        {
          title: "Bookings",
          path: `${role}/bookings`,
          icon: ApartmentIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      menuItems.push(
        {
          title: "Post New Flat",
          path: `${role}/post-flat-info`,
          icon: DashboardIcon,
        },
        {
          title: "My Flats",
          path: `${role}/my-flat-posts`,
          icon: TryIcon,
        },
        {
          title: "My Requests",
          path: `${role}/my-requests`,
          icon: MedicalInformationIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...menuItems, ...defaultMenus];
};
