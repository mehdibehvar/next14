const singleUserPage =async ({ params }) => {
 const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
 const user= await res.json();

  return (
    <main className="flex flex-col justify-center gap-4 items-center h-32">
    <h1 className=" h-4 font-bold">this is  user <span className="text-red-500 font-bold text-2xl">{params.id}</span> page</h1>
    <h3>{user.title}</h3>
  </main>
  )
}

export default singleUserPage