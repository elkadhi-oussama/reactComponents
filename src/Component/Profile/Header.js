import Name from './FullName'
function TopHeader() {
    return (
        <header>
        <Name/>
        <ul class="navmenu">
          <li><a href={'#'}>About</a></li>
          <li><a href={'#'}>Projects</a></li>
          <li><a href={'#'}>Contact</a></li>
        </ul>
      </header>
    )
}

export default TopHeader;