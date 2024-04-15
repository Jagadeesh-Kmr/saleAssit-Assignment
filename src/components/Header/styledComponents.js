import styled from 'styled-components'

export const HeaderBgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px 10px 30px;
  width: 1480px;
  height: 105px;
  gap: 0px;
  opacity: 0px;
  padding: 10px 60px 0px 100px;
  background-color: #0c0c0c;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80px;
    padding: 10px;
  }
`

export const HeaderH1 = styled.h1`
  font-family: Comme;
  font-size: 20px;
  font-weight: 400;
  line-height: 28.34px;
  letter-spacing: 0.55em;
  text-align: left;
  color: #e5dfd9;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const HeadingIconUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 161px;
  height: 24px;
  top: 21px;
  left: 1093px;
  gap: 0px;
  opacity: 0px;
  color: #e5dfd9;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const HeadingItemsUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 472px;
  height: 18px;
  top: 69px;
  left: 404px;
  gap: 0px;
  opacity: 0px;
  color: #e5dfd9;
  list-style-type: none;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeadingItemLi = styled.li`
  width: 63px;
  height: 18px;
  top: 69px;
  left: 813px;
  gap: 0px;
  opacity: 0px;
  font-family: Encode Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.5px;
  letter-spacing: 0.1em;
  text-align: left;
`
