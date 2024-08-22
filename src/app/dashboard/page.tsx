import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { user } = await getServerSession();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <Typography>Welcome {user.email}</Typography>
    </div>
  );
}
