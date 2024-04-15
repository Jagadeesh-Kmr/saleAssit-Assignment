import {
  IoBagHandleOutline,
  IoSearchOutline,
  IoBookmarkOutline,
} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import './index.css'

import {
  HeaderBgDiv,
  HeaderH1,
  HeadingIconUl,
  HeadingItemsUl,
} from './styledComponents'

const Header = () => (
  <>
    <HeaderBgDiv>
      <HeaderH1>TANN TRIM</HeaderH1>

      <HeadingItemsUl>
        <li>Bags</li>
        <li>Travel</li>
        <li>Accesories</li>
        <li>Gifting</li>
        <li>Jewelery</li>
      </HeadingItemsUl>

      <HeadingIconUl>
        <IoSearchOutline className="header-icon" />
        <CgProfile className="header-icon" />
        <IoBookmarkOutline className="header-icon" />
        <IoBagHandleOutline className="header-icon" />
      </HeadingIconUl>
    </HeaderBgDiv>
  </>
)

export default Header
