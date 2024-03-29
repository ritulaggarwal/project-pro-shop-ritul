import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (

    <Carousel pause='hover' className='bg-dark' interval={1800}>

      {products.map((product, ind) => (
        <Carousel.Item key={product._id}>

          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <div className="navcontainer">
              <ul className="navlist">
                {
                  (ind === 0) ? <li className='il'><i className="fas fa-circle"></i></li> : <li className='il'><i className="far fa-circle"></i></li>
                }
                {
                  (ind === 1) ? <li className='il'><i className="fas fa-circle"></i></li> : <li className='il'><i className="far fa-circle"></i></li>
                }
                {
                  (ind === 2) ? <li className='il'><i className="fas fa-circle"></i></li> : <li className='il'><i className="far fa-circle"></i></li>
                }




              </ul>
            </div>
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>

        </Carousel.Item>

      ))}

    </Carousel>






  )
}

export default ProductCarousel