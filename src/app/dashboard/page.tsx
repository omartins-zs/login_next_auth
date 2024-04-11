import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"

export default async function Page() {

    const session = await getServerSession();

    console.log("Session", session)

    if (!session) {
        redirect("/");
    }

    return (
        <div className="container mx-auto">
            <div>
                <div className="text-cyan-500">Olá, {session.user?.name}</div>
                <br />
                <div className="text-orange-400">Email: {session.user?.email}</div>
                <br />
                <div className="text-lime-700">Image url: {session.user?.image}</div>
            </div>
        </div>
    );
}


