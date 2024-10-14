// /app/roles/success.tsx
export default function SuccessPage() {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-4">Role Selection Completed!</h1>
        <p className="text-lg">
          Thank you for selecting your role. You can now proceed with using the platform.
        </p>
        <a href="/dashboard" className="mt-6 text-blue-500 hover:underline">
          Go to Dashboard
        </a>
      </div>
    );
  }
  