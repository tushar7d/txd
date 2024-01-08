import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="  h-screen w-screen items-center flex flex-col justify-center">
      <div className="text-white font-serif text-center text-3xl mb-4">
        This case study is locked
      </div>
      <div className="text-white/75 text-xl text-center mb-12">
        Reach out to me to get access
      </div>
      <SignIn />
    </div>
  );
}
