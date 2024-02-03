import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className="text-white">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800 mt-4 mb-4"
        >
          Signout
        </button>
      </form>
      <Button
        size="sm"
        variant="default"
        asChild
        className="px-0 font-normal w-full h-10"
      >
        <Link href="/expense">Track Expenses</Link>
      </Button>
    </div>
  );
};

export default SettingsPage;
