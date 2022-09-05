import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {FaBackspace} from '@react-icons/all-files/fa/FaBackspace'

const Header = styled(AppBar)`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none;
`
const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
            
            <Tabs to='/menu'><FaBackspace style={{marginTop:"5px"}}/></Tabs>
                <Tabs to='/armine'>Armine's CRUD</Tabs>
                <Tabs to='/armine/all'>All Users</Tabs>
                <Tabs to='/armine/add'>Add Users</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;