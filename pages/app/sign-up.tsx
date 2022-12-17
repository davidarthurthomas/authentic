import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="h-screen w-screen bg-[#fefbf3] flex flex-col items-center justify-center">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            card: "bg-[#FEFBF3]",
            formFieldInput:
              "bg-[#FEFBF3] focus:border-[#fa4028] focus:shadow-none",
            formButtonPrimary: "bg-[#fa4028] hover:bg-[#FB6A57]",
            footerActionLink: "text-[#fa4028] hover:text-[#fa4028]",
          },
        }}
      />
    </main>
  );
}
