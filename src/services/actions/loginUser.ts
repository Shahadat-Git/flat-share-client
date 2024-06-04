"use server";
import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
  const res = await fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const userData = await res.json();
  return userData;
};
