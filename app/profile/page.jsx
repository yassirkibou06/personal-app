
import Profile from "@components/Profile";
import Shadow from "@components/Shadow"

const page = () => {
    return (
        <div>
            <Shadow />
            <h1 className="about-title">Portfolio.</h1>
            <Profile />
        </div>
    )
}

export default page;