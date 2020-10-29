import React from 'react'
import { Button, Card } from 'react-bootstrap'
import chair from '../myfile/The Canvas Chair/Fredericia-The-Canvas-Chair-Natural-Canvas-Soaped-Oak-Close-Up2.jpg'
import '../styles/bid.scss'
function Bid() {
  return (
    <>
      <div className="container">
        <div className="row my-2">
          <div className="col flex-column text-center justify-content-center">
            <div>
              <img
                className="grace-chair"
                src="https://wp.andtradition.com/wp-content/uploads/2019/10/Lille-Petra-VB1-1.svg"
                alt=""
              />
            </div>
            <div className="grace-text text-center mx-auto">
              <span>FURNITURE</span>
              <h5>
                From reissued Scandinavian design icons to the works of
                contemporary international designers, the collection of
                furniture combines timeless pieces with future classics.
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 grace-filter"></div>
          <div className="col-10 d-flex flex-wrap">
            <Card className="col-5 m-3 rounded-0 p-0">
              <div className="grace-tag grace-tag-time rounded-0">16:10:11</div>
              <div className="grace-tag-time rounded-0 grace-tag-p">
                $27,000
              </div>
              <Card.Img className="rounded-0" variant="top" src={chair} />
              <Card.Body>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <h2 className="grace-title text-left">IMOLA</h2>
                      <p className="card-text my-1">IMOLA單椅</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="g-grace-context">
                        <p className="card-text mb-2 mt-0 mx-2 grace-point">
                          截標日期
                        </p>
                        <p className="card-text my-2 mx-2 grace-point">
                          截標時間
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="card-text mb-2 mt-0 grace-point grace-time">
                          2020/11/20
                        </p>
                        <p className="card-text my-2 mt-0 grace-point grace-time">
                          11:00 A.M.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 py-2 align-self-end d-flex justify-content-end">
                    <button className="grace-btn2 rounded-0 ">
                      <span>下標</span>
                    </button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-5 m-3 rounded-0 p-0">
              <div className="btn grace-tag grace-tag-time rounded-0">
                16:10:11
              </div>
              <div className="btn grace-tag-time rounded-0 grace-tag-p">
                $27,000
              </div>
              <Card.Img className="rounded-0" variant="top" src={chair} />
              <Card.Body>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <h2 className="grace-title text-left">IMOLA</h2>
                      <p className="card-text my-1">IMOLA單椅</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="g-grace-context">
                        <p className="card-text mb-2 mt-0 mx-2 grace-point">
                          截標日期
                        </p>
                        <p className="card-text my-2 mx-2 grace-point">
                          截標時間
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="card-text mb-2 mt-0 grace-point grace-time">
                          2020/11/20
                        </p>
                        <p className="card-text my-2 mt-0 grace-point grace-time">
                          11:00 A.M.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 py-2 align-self-end d-flex justify-content-end">
                    <button className="grace-btn2 rounded-0 ">
                      <span>下標</span>
                    </button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-6 rounded-0 p-0">
              <div className="grace-tag grace-tag-time d-flex align-items-center justify-content-center rounded-0">
                <span>16:10:11</span>
              </div>
              <div className="grace-tag-time d-flex align-items-center justify-content-center rounded-0 grace-tag-p">
                <span>$27,000</span>
              </div>
              <Card.Img className="rounded-0" variant="top" src={chair} />
              <Card.Body>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <h2 className="grace-title text-left">IMOLA</h2>
                      <p className="card-text my-1">IMOLA單椅</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="g-grace-context">
                        <p className="card-text mb-2 mt-0 mx-2 grace-point">
                          截標日期
                        </p>
                        <p className="card-text my-2 mx-2 grace-point">
                          截標時間
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="card-text mb-2 mt-0 grace-point grace-time">
                          2020/11/20
                        </p>
                        <p className="card-text my-2 mt-0 grace-point grace-time">
                          11:00 A.M.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 py-2 align-self-end d-flex justify-content-end">
                    <button className="grace-btn2 rounded-0 ">
                      <span>下標</span>
                    </button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bid