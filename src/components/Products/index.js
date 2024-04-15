import {useState, useEffect} from 'react'
import {IoSearchOutline} from 'react-icons/io5'

import Loader from 'react-loader-spinner'
import {BsBoxArrowUp} from 'react-icons/bs'
import DisplayProducts from '../DisplayProducts'

import './index.css'

import {
  ProductsMainContainer,
  LoadingViewContainer,
  ErrorMessage,
  ProductsUl,
  RenderProductsDiv,
  SimilarProductsUl,
  SimilarProductsLi,
  ProductsP,
  SimilarProductsMobileUl,
  BagsProductsDiv,
  BagsProductsP,
  SortByDiv,
  SearchBar,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Products = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })
  const [searchInput, updateSearch] = useState('')

  const getProductsData = async () => {
    setApiResponse({
      status: apiStatusConstants.inProgress,
      data: null,
      errorMsg: null,
    })
    const url = `https://fakestoreapi.com/products?limit=10&search=${searchInput}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      if (response.ok) {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.success,
          data: fetchedData,
        }))
      } else {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.failure,
          errorMsg: fetchedData.error_msg,
        }))
      }
    }
  }

  const renderSuccessView = () => {
    const {data} = apiResponse
    const updatedData = data.map(eachData => ({
      title: eachData.title,
      id: eachData.id,
      category: eachData.category,
      image: eachData.image,
      price: eachData.price,
    }))
    return (
      <ProductsUl>
        {updatedData.map(eachData => (
          <DisplayProducts key={eachData.id} productsData={eachData} />
        ))}
      </ProductsUl>
    )
  }

  useEffect(() => {
    getProductsData()
  }, [])

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <ErrorMessage>{errorMsg}</ErrorMessage>
  }

  const renderLoadingView = () => (
    <LoadingViewContainer>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />{' '}
    </LoadingViewContainer>
  )

  const renderProducts = () => {
    const {status} = apiResponse

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  const onChangeSearch = event => {
    updateSearch(event.target.value)
  }

  const onSubmitSearchInput = () => {
    getProductsData()
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      getProductsData()
    }
  }

  return (
    <>
      <ProductsMainContainer>
        <SimilarProductsUl>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111244/Frame_13_dtsio0.png"
              alt="product"
            />
            <ProductsP>Duffle Bag</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111269/Frame_49_1_ksj8qe.png"
              alt="product"
            />
            <ProductsP>Laptop Sleeve</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111289/Frame_49_2_qavdmq.png"
              alt="product"
            />
            <ProductsP>Messenger Bags</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111230/Frame_49_lwchex.png"
              alt="product"
            />
            <ProductsP>Tote Bag</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713106529/Frame_50_vj2m9h.png"
              alt="product"
            />
            <ProductsP>Vanity Pouch</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111312/Frame_20_zkuayj.png"
              alt="product"
            />
            <ProductsP>Handbags</ProductsP>
          </SimilarProductsLi>

          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111269/Frame_49_1_ksj8qe.png"
              alt="product"
            />
            <ProductsP>Laptop Sleeve</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111289/Frame_49_2_qavdmq.png"
              alt="product"
            />
            <ProductsP>Messenger Bags</ProductsP>
          </SimilarProductsLi>
        </SimilarProductsUl>

        <SimilarProductsMobileUl>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111305/Frame_22_grzyt7.png"
              alt="product"
            />
            <ProductsP>Slings Bgs</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111230/Frame_49_lwchex.png"
              alt="product"
            />
            <ProductsP>Tote Bag</ProductsP>
          </SimilarProductsLi>
          <SimilarProductsLi>
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1713111289/Frame_49_2_qavdmq.png"
              alt="product"
            />
            <ProductsP>Messenger Bags</ProductsP>
          </SimilarProductsLi>
        </SimilarProductsMobileUl>

        <BagsProductsDiv>
          <BagsProductsP>Bags . Backpacks</BagsProductsP>
          <BagsProductsP>
            13 products{'    '}
            <BsBoxArrowUp />
          </BagsProductsP>
        </BagsProductsDiv>
        <SortByDiv>
          <SearchBar
            type="text"
            data-testid="searchButton"
            onChange={onChangeSearch}
            onKeyDown={onEnterSearchInput}
          />
          <button
            type="button"
            className="search-btn"
            onClick={onSubmitSearchInput}
          >
            <IoSearchOutline className="search-icon" />
          </button>
        </SortByDiv>
        <RenderProductsDiv>
          <div>{renderProducts()}</div>
        </RenderProductsDiv>
      </ProductsMainContainer>
    </>
  )
}

export default Products
