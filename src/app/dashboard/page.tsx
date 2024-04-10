import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Page() {
    const session = await getServerSession()

    if (!session) {
        redirect("/")
    }

    return (
        <div>
            <div>Ola, {session?.user?.name}</div>
            <div>Dashboard</div>
        </div>

    )
}