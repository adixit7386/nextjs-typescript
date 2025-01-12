import SigninForm from "./_components/signin-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function SignInPage() {
  const session = await getServerSession();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <div className="container">
      <SigninForm />
    </div>
  );
}
