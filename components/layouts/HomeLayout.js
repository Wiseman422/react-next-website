import LogoAndNav from "../header/LogoAndNav";
import HomeFooter from "../footer/HomeFooter";

const HomeLayout = Content => {

    return () => (

        <React.Fragment>
            <LogoAndNav />
            <main id="content" role="main">
                <Content />
            </main>
            <HomeFooter />
        </React.Fragment>
        
    )
}

export default HomeLayout;
