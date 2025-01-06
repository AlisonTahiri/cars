import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="submit">Signin</button>
        </form>
      )}
    </>
  );
}
