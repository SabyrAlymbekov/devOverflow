import Question from "@/components/forms/Question"
import React from "react"
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {getUserById} from "@/lib/actions/user.action";

const Page = async () => {
    // const {userId} = auth()

    const userId = "clerk_abc123xyz"

    if (!userId) {redirect('/sign-in')}

    const mongoUser = await getUserById({ userId })

    console.log(mongoUser)

    return (
        <div>
            <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
            <div className="mt-9">
                <Question mongoUserId={JSON.stringify(mongoUser._id)} />
            </div>
        </div>
    )
}

export default Page