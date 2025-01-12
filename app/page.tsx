import ClientButton from "./ClientButton";
import ServerButton from "./ServerButton";
import ThemeToggle from "../components/theme-toggle";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      <div>{session?.user?.name}</div>
      <h1>Hey there, I am a server component</h1>
      <ThemeToggle />
      <ClientButton />
      <ServerButton />
    </div>
  );
}
