import { cookies } from "next/headers";
import { verifyToken } from "@/lib/generatetoken"; // reuse the JWT utility

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Token not found");
  }

  const decoded = verifyToken(token);

  console.log("decoded value:", decoded);

  if (!decoded) {
    throw new Error("Unauthorized");
  }

  return (decoded as { userID?: string }).userID;
}