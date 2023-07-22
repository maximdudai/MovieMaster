import { Navigation } from "../../components/Navigation/Navigation"

export const HomePage = () => {
    return (
        <>
            <div className="HomePageContainer w-full flex flex-col justify-center items-center">
                <div className="appBanneContent w-full">
                    <Navigation />
                </div>

                <div className="mainPageContent container">

                </div>
            </div>
        </>
    )
}