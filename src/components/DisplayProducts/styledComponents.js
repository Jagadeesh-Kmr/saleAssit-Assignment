import styled from 'styled-components'

export const DisplayProductsLi = styled.li`
  list-style-type: none;
  width: 240px;
  height: 310px;
  gap: 0px;
  opacity: 0px;
  background-color: #141414;
  margin: 14px;
  border-radius: 10px;
  padding-bottom: 0px;
  @media screen and (max-width: 768px) {
    width: 188px;
    height: 267px;
    margin: 30px;
    top: 16px;
    gap: 0px;
    opacity: 0px;
  }
`

export const ProductImg = styled.img`
  width: 240px;
  height: 180px;
  opacity: 0px;
  margin-bottom: 10px;
  border-radius: 10px 10px 0px 0px;
  @media screen and (max-width: 768px) {
    width: 188px;
    height: 144px;
    top: 16px;
    gap: 0px;
    opacity: 0px;
  }
`
export const ProductName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  line-height: 21.6px;
  text-align: left;
  color: #ffffff;
  height: 60px;
  margin: 5px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    font-weight: 500;
    height: 55px;
  }
`

export const SignInDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 17px;
  gap: 0px;
  opacity: 0px;
  margin: 8px 8px 0px 8px;
  @media screen and (max-width: 768px) {
    width: 168px;
    height: Hug (45px) px;
    top: 248px;
    gap: 4px;
    opacity: 0px;
  }
`
export const SignP = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
  color: #ffffff;
  width: 140px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    text-align: left;
  }
`
export const WishlistBtn = styled.button`
  border: none;
  height: 20px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`
export const DiscountSpan = styled.span`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #2fc14f;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    font-weight: 500;
  }
`
