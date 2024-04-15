import {IoBagHandleOutline} from 'react-icons/io5'

import {
  DisplayProductsLi,
  ProductImg,
  ProductName,
  SignInDiv,
  SignP,
  WishlistBtn,
  DiscountSpan,
} from './styledComponents'

import './index.css'

const DisplayProducts = props => {
  const {productsData} = props
  const {title, image, price} = productsData
  return (
    <>
      <DisplayProductsLi>
        <ProductImg src={image} alt={title} />
        <ProductName>{title}</ProductName>
        <SignInDiv>
          <SignP>
            ₹ {price}
            {'  '}
            <DiscountSpan>(50% Off)</DiscountSpan>
          </SignP>
          <WishlistBtn type="button">
            <IoBagHandleOutline className="wishlist-icon" />
          </WishlistBtn>
        </SignInDiv>
      </DisplayProductsLi>
    </>
  )
}

export default DisplayProducts
