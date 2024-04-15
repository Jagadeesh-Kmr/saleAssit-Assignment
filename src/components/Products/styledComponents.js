import styled from 'styled-components'

export const ProductsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  gap: 0px;
  background-color: #0c0c0c;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  margin: 0px;
  margin-top: 100px;
  text-align: center;
`

export const ProductsUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1402px;
  min-height: 100vh;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    width: 380px;
  }
`

export const RenderProductsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

export const FilterHr = styled.hr`
  width: 190px;
  height: 0px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  color: #e5e5e5;
`

export const SimilarProductsUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  width: Hug (1, 303px) px;
  height: Hug (130px) px;
  top: 137px;
  left: 32px;
  gap: 56px;
  opacity: 0px;
  color: #ffffff;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SimilarProductsLi = styled.li`
  text-align: center;
`
export const ProductsP = styled.p`
  width: 110px;
  height: 16px;
  top: 108px;
  left: 17px;
  gap: 0px;
  opacity: 0px;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    width: 100px;
  }
`

export const SimilarProductsMobileUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  width: 100%;
  gap: 16px;
  opacity: 0px;
  color: #ffffff;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const BagsProductsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  height: 20px;
  top: 299px;
  left: 32px;
  gap: 0px;
  opacity: 0px;
  color: #e5dfd9;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const BagsProductsP = styled.p`
  width: Hug (151px) px;
  height: Hug (20px) px;
  top: 299px;
  left: 32px;
  gap: 8px;
  opacity: 0px;
  font-family: Encode Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1em;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`

export const SortByDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-left: 124px;
  margin-top: 30px;
  border: 2px solid #d7dfe9;
  border-radius: 10px;
  width: 350px;
  height: 35px;
  padding-right: 10px;
  padding-left: 8px;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 35px;
    margin-left: 16px;
  }
`
export const SearchBar = styled.input`
  color: #ffffff;
  font-family: 'Roboto';
  background-color: transparent;
  outline: none;
  width: 320px;
  border: 0px;
  @media screen and (max-width: 768px) {
    width: 130px;
  }
`
