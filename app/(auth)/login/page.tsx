import { Metadata } from "next";
import LoginForm from "@/components/auth/login-form";
import { use } from "react";

export const metadata: Metadata = {
  title: "Login | Hungry Panda",
  description: "Login to your Hungry Panda account to place food orders",
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ registered?: string }>;
}) {
  // In Next.js 15, searchParams is a promise
  const params = use(searchParams);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {params.registered && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Account created successfully! Please log in.
          </div>
        )}
        <LoginForm />
      </div>
    </div>
  );
}
