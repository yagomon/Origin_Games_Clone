import React from 'react'
import Footer from '../Footer/footer'
import './containerBodyPage.css'

const ContainerBodyPage = (props) => {
  return (
    <div className='body' id={props.id}>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default ContainerBodyPage
