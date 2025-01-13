import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      try {
        const existingUser = await client.fetch(
          `*[_type == "app-user" && email == $email][0]`,
          { email: user.email }
        );

        if (!existingUser) {
          const newUser = {
            _type: "app-user",
            name: user.name,
            email: user.email,
            profilePicSrc: user.image,
          };
          await client.create(newUser);
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in/Sanity interaction:", error);
        return false;
      }
    },
    async session({ session, token }) {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});
