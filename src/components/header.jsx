"use client"

import Link from "next/link"

export const Header=()=>{
    return (
        <header className=" w-full  border-2 border-red-700 p-3">
            <h1 className="flex justify-center text-[32px] text-purple-500">header</h1>
            <div className="flex flex-col gap-2 text-blue-600">
                <Link href="/">home</Link>
                <a href="/users">got to users with anchor</a>
                <Link href="/users">go to users with link component</Link>
            </div>
        </header>
    )
}