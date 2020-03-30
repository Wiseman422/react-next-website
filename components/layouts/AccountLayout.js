import LogoAndNav from "../header/LogoAndNav";
import AccountFooter from "../footer/AccountFooter";

const AccountLayout = Content => {

    return () => (

        <React.Fragment>
            <LogoAndNav page="account"/>
            <main id="content" role="main">
                <Content />
            </main>
            <AccountFooter />
        </React.Fragment>
        
    )
}

export default AccountLayout