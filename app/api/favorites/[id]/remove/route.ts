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

  return client
    .patch(session.user.id)
    .unset([`favoriteCars[carId=="${id}"]`])
    .commit()
    .then((res) => new Response(JSON.stringify(res)));
};
