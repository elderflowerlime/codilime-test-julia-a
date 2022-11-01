import React, { useState } from 'react'
import './Overview.css'
import Picture from '../resources/Picture.png'
import { Data }  from '../Data.js'
import Plus from '../resources/Plus.png'
import Minus from '../resources/Minus.png'


function Overview() {

        const [clicked,setClicked] = useState(false)

        const toggle = index => {
            if(clicked === index) {
                //if clicked question in already open then close it
                return setClicked(null)
            }

            setClicked(index)
        }


  return (
    <div className="overview-body">
        {/* SECTION ONE */}
        <div className="introduction">
            <div className="introduction-text">
                <h2><span>Duis aute irure</span> dolor in reprehenderit</h2>
                <div className="introduction-text-small">
                    <p>Nam at lectus urna duis 
                    convallis. Id semper risus in hendrerit gravida rutrum quisque 
                    non tellus. Elit eget gravida cum sociis natoque. Ultrices neque 
                    ornare aenean euismod elementum nisi quis eleifend. Arcu felis 
                    bibendum ut tristique et egestas. </p>
                </div>
                <button className='btn-primary btn-big'> Discover now</button>
            </div>
            <div className="introduction-picture">
                <img src={Picture} alt=''></img>
            </div>
        </div>
        {/* SECTION TWO */}
        <div className="qna-title"> 
            <h1>Lacinia quis vel eros tempor orci.</h1>
        </div>
        <div className="qna-section">
            {Data.map((item, index) => {
                return (
                    <div className="qna-container">
                        <div className="qna-wrap" onClicked={() => toggle(index)} key={index}>
                            <div className="qna-wrap-text">
                                <p>{item.indexNumber}</p>
                                <h2>{item.question}</h2>
                            </div>

                            <span>{clicked === index ? <img src={Minus} alt='minus'/> : <img src={Plus} alt='plus'/>}</span>

                        </div>
                        
                        <p>{item.answer}</p>
                    </div>
                 );
             })}

        </div>
        {/* SECTION THREE */}
        <div className="quote-section">
            <div className="side-text"> 
            Bibendum at varius vel pharetra vel turpis nunc eget lorem.
            </div>
            <div className="quote">
                <p> Aliquam purus sit amet luctus venenatis lectus magna. 
                Faucibus purus in massa tempor nec feugiat nisl pretium
                 fusce. Tortor vitae purus faucibus ornare. Neque 
                 viverra justo nec ultrices. Nisl nunc mi ipsum faucibus.
                  Tristique risus nec feugiat in fermentum. Elit duis 
                  tristique sollicitudin nibh sit amet commodo nulla. </p>
                <p> Faucibus Vitae, Office Assistant </p>
                <>logo</>
            </div>
        </div>

        {/* SECTION FOUR */}
        <div className="blocks-section">
            <div className="blocks-header">
                <h1>Massa tempor nec feugiat nisl pretium fusce</h1>
                <p>Pellentesque habitant morbi tristique senectus et
                    netus et malesuada. Ipsum faucibus vitae aliquet
                    nec ullamcorper sit amet risus nullam. Dictum 
                    varius duis at consectetur lorem donec massa sapien.
                    Massa tempornec feugiat nisl pretium fusce. </p>
                <p>Elit scelerisque mauris pellentesque?   </p>
            </div>
            <div className="blocks-container">
                <div className="one-block">
                    <>icon</>
                </div>
            </div>
        </div>     
        {/* SECTION FIVE */}
        {/* <div className="subscribe-section">
            <h1>Subscrbe to our newsletter</h1>
            <input>Company email address</input> <button>Subscribe</button>
            <p>Chupa chups gummi bears shortbread candy </p>
        </div> */}
    </div>
  )
}

export default Overview