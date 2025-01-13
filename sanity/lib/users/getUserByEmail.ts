import { client } from "../client";

export const getUserByEmail = async <T>(email: string): Promise<T | null> => {
  const USER_BY_EMAIL_QUERY = `
     *[_type == "app-user" && email == $email][0]
        `;

  try {
    const user = await client.fetch(USER_BY_EMAIL_QUERY, { email });
    return user || null;
  } catch (error) {
    console.log("Error fetching user data. ", error);
    return null;
  }
};
