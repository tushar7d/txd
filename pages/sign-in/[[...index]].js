import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="  h-screen w-screen items-center flex flex-col justify-center">
      <div className="text-white font-serif text-center text-3xl mb-4">
        This case study is locked
      </div>
      <div className="text-white/75 text-xl text-center mb-12">
        <a className="text-blue-500" href="https://www.linkedin.com/in/tushardebnath/" target="_blank" >Reach out</a> to get access
      </div>
      <SignIn />
    </div>
  );
}


