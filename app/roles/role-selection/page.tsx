// /app/roles/role-selection/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import { useForm, SubmitHandler } from 'react-hook-form';
import { roleSelectionAction } from '@/app/actions'; // Ensure the export in actions.ts is correct

// Define the type for form data
type FormData = {
  role: string;
};

export default function RoleSelectionForm() {
  const { register, handleSubmit } = useForm<FormData>(); // Explicitly type the form data
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Type the error state

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setError(null);

    const { role } = data;
    const { error } = await roleSelectionAction(role); // Ensure this action is properly imported

    if (error) {
      setError(error.message);
    } else {
      router.push('/roles/success'); // Redirect after successful role selection
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Select Your Role</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="role" className="block mb-2 text-lg">
          Choose Your Role
        </label>

        <select
          id="role"
          {...register('role', { required: true })}
          className="block w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="business_owner">Business Owner</option>
          <option value="contractor">Contractor</option>
          <option value="utility">Utility</option>
        </select>

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
