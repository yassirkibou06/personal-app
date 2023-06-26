
import News from "@components/News";
import Shadow from "@components/Shadow"

const page = () => {
    return (
        <div>
            <Shadow />
            <h1 className="about-title">News.</h1>
            <News />
        </div>
    )
}

export default page;