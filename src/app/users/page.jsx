import Link from "next/link"

const usersPage = () => {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-32">
      <h1 className=" h-4 font-bold">this is users page</h1>
      <Link className="text-red-500" href="/user/1">user1</Link>
      <Link className="text-red-500" href="/user/2">user2</Link>
    </main>
  )
}

export default usersPage