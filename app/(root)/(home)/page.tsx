import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
       <UserButton/>
       <p>Hello World</p>
    </div>
  )
}