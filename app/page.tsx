import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";

export default async function Index() {
  return (
    <>

      {/* Additional Homepage Content */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        {/* New Header Section */}
        <header className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">Welcome to Netsy</h1>
          <p className="mt-4 text-lg text-gray-600">Your partner for seamless assessment scheduling and project management</p>
        </header>

        {/* New Image Section */}
     <div className="mt-8">
          <img 
            src="/HP-1.png"  // Ensure the path starts with a forward slash
            alt="Feature Image" 
            className="rounded-lg shadow-lg w-full max-w-screen-md"
          />
        </div>

        {/* New Benefits Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            <li>✔️ Reliable contractors with proven expertise</li>
            <li>✔️ Quick and easy scheduling process</li>
            <li>✔️ Comprehensive project management from start to finish</li>
            <li>✔️ Utility approval made simple</li>
          </ul>
        </section>

        {/* Sign-Up and Sign-In Buttons */}
        <div className="mt-10 space-x-4">
          <Link href="/app/sign-up" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium">
            Sign Up
          </Link>
          <Link href="/app/sign-in" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
