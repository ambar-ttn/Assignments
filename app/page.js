// export default async function Home() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     {
//       cache: "force-cache",
//     }
//   );

//   const data = await res.json();

//   return <h1>{data.title}</h1>;
// }







// import { refreshPosts } from "./actions/revalidate";

// export default async function Home() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     {
//       next: { tags: ["posts"] }, 
//     }
//   );
//   const data = await res.json();
//   return (
//     <>
//       <form action={refreshPosts}>
//         <button type="submit">Revalidate Cache</button>
//       </form>

//       <p>{data[0].title}</p>
//     </>
//   );
// }





// import OpenPopupButton from "./components/OpenPopupButton";

// export default async function Home() {
//   return (
//     <>
//       <h1>Home Page</h1>
//       <OpenPopupButton />
//     </>
//   );
// }



import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Dummy Image using Next Image</h1>

      <Image
        src="https://picsum.photos/500/300"
        alt="Random Image"
        width={500}
        height={300}
      />
    </>
  );
}