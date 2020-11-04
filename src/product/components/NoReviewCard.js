import React, { useEffect, useState } from 'react'
import popularImg from '../images/777.jpg'
import { BsStarFill } from 'react-icons/bs'
import { Rate } from 'antd'
import series from '../images/series.jpg'

function NoReviewCard(props) {
  const { item } = props

  return (
    <>
      <div className="row reviewNO justify-content-between d-flex">
        <div className="review-photo justify-content-center col-4">
          <img src={`http://localhost:3001/img/` + item.photo} alt="" />
        </div>
        <div className="col-7">
          <div className="d-flex justify-content-between ">
            <h3>尚未有評論</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoReviewCard