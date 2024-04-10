import { getServerSession } from "next-auth"

export default async function Page() {
    const session = await getServerSession()
    return (
        <div>
            <div>Ola, {session?.user?.name}</div>
            <div>Dashboard</div>
        </div>

    )
}