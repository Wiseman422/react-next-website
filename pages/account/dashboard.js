import AccountLayout from "../../components/layouts/AccountLayout";
import AccountHeader from "../../components/header/AccountHeader";
import { Container } from 'reactstrap'
import '../../static/style.scss'

const Page = () => (
    <React.Fragment>
        <AccountHeader />
        <Container className="space-5 text-center">
            Content.
        </Container>
    </React.Fragment>
)

export default AccountLayout(Page)
