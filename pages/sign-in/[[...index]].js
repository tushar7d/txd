import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="  h-screen w-screen items-center flex flex-col justify-center">
      <div>You need to login to see this case study</div>
      <SignIn />
    </div>
  );
}
