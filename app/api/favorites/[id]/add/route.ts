import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";

export const POST = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const id = (await params).id;
  const session = await auth();

  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = await client
    .patch(session.user.id)
    .setIfMissing({ favoriteCars: [] })
    .append("favoriteCars", [{ carId: id }])
    .commit({
      autoGenerateArrayKeys: true,
    });

  return new Response(JSON.stringify(user));
};
