import { Post } from "@/types/post";

export const revalidate = 60;

export default async function ISRExample() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  ).then((res) => res.json());

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Incremental Static Regeneration</h1>
      <p>export const revalidate with how many seconds it takes</p>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm mt-1">{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
