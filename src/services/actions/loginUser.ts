"use server";
import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
  const res = await fetch("https://next-flat-share-server.vercel.app/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-cache",
    credentials: "include",
  });
  const userData = await res.json();
  return userData;
};
