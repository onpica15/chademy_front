import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FundFirst from '../components/FundIFirst'
import '../styles/FundItem.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

function FundItem(props) {
  const isLogged = useSelector((state) => state.user.logged)

  const { setCartAmount, cartamount, resetShow, setResetShow } = props
  // const { setCartAmount, cartamount } = props

  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  // ---------------以下開始fetch SQL get data function-----------------

  // 到資料庫拿一筆資料
  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_fund/reactitem/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setProduct(data.slice(0))
  }
  useEffect(() => {
    getItemFromSQL()
  }, [sid])

  return (
    <>
      {product.map((item, index) => {
        return (
          <FundFirst
            key={index}
            item={item}
            product={product}
            sid={sid}
            setCartAmount={setCartAmount}
            cartamount={cartamount}
            isLogged={isLogged}
            resetShow={resetShow}
            setResetShow={setResetShow}
          />
        )
      })}

      {/* <Container>
        <Row>
          <h2 className="grace-related-product text-center">瀏覽紀錄</h2>
          <div className="row">
            <Carousel itemsToScroll={3} itemsToShow={3}>
              {data.map((item, index) => {
                if (data.length > 8) return (data.length = 8)
                return <Slider key={index} item={item} {...props} />
              })}
            </Carousel>
          </div>
        </Row>
      </Container> */}
    </>
  )
}

export default FundItem
