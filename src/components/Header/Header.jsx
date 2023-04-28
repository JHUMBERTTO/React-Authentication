import './header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a href='/' className='headerLogo'>LOGO</a>
      <ul className='headerNavList'>
        <li className='headerListItem'>
        <a href='/' className='HeaderItemLink'>Home</a>
          </li>
        <li className='headerListItem'>
        <a href='/dashboard' className='HeaderItemLink'>Dashboard</a>
          </li>
        <li className='headerListItem'>
        <a href='/secret' className='HeaderItemLink'>Secret</a>
          </li>
        <li className='headerListItem'>
        <a href='/login' className='HeaderItemLink'>Login</a>
          </li>
        <li className='headerListItem'>
        <a href='/singup' className='HeaderItemLink'>Singup</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header