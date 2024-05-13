import { Link, useNavigate } from 'react-router-dom'
import quokkaLogo from '../../assets/urso branco 1.svg'
import { useAuth } from '../../hooks/useAuth'
import { HeaderContainer, Logo } from './styles'


export function Header() {
    const user = useAuth()
    const history = useNavigate()

    function userLogout() {
        user.logout()
        history('/')
    }
    return(
        <HeaderContainer >
            <Link to={'/home'}><Logo src={quokkaLogo} alt="" /></Link>
            <strong>Quokka</strong>
            <button onClick={userLogout}>Sair</button>
        </HeaderContainer>
    )
}