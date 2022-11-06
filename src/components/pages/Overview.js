import React, { useState } from 'react'
import './Overview.css'
import Picture from '../resources/Picture.png'
import { Data }  from '../Data.js'
import Plus from '../resources/Plus.png'
import Minus from '../resources/Minus.png'
import inVision from '../resources/inVision.png'
import blockone from '../resources/blockone.png'
import blocktwo from '../resources/blocktwo.png'
import androidGrey from '../resources/androidGrey.png'
import blockfour from '../resources/blockfour.png'
import circleWhite from '../resources/circleWhite.png'
import scissorsWhite from '../resources/scissorsWhite.png'
import androidWhite from '../resources/androidWhite.png'
import plusnminusWhite from '../resources/plusnminusWhite.png'


function Overview() {

        const [clicked, setClicked] = useState(false)

        const toggle = (i) => {
            if(clicked === i) {
                //if clicked question in already open then close it
                return setClicked(null)
            }
            setClicked(i)
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
        <div className="qna">
            <div className="qna-title"> 
                 <h1>Lacinia quis vel eros tempor orci.</h1>
            </div>
            <div className="qna-section">
                {Data.map((item, i) => {
                    return (
                        <div className="qna-container">
                            <div className="qna-wrap" onClick={() => toggle(i)} key={i}>
                                <div className="qna-wrap-text">
                                    <p>{item.index}</p>
                                    <h2>{item.question}</h2>
                                </div>

                            <span>{clicked === i ? <img src={Minus} alt='minus'/> : <img src={Plus} alt='plus'/> }</span>

                            </div>
                            <div className={clicked === i ? 'qna-answer show' : 'qna-answer'}><p>{item.answer}</p></div>
                        </div>
                    );
                })}
            </div>
        </div>
        {/* SECTION THREE */}
        <div className="quote-section">
            <div className="side-text"> 
            <h2> Bibendum at varius vel pharetra vel turpis nunc eget lorem. </h2>
            </div>
            <div className="quote">
                <p> Aliquam purus sit amet luctus venenatis lectus magna. 
                Faucibus purus in massa tempor nec feugiat nisl pretium
                 fusce. Tortor vitae purus faucibus ornare. Neque 
                 viverra justo nec ultrices. Nisl nunc mi ipsum faucibus.
                  Tristique risus nec feugiat in fermentum. Elit duis 
                  tristique sollicitudin nibh sit amet commodo nulla. </p>
                <p> Faucibus Vitae, Office Assistant </p>
                <img src={inVision} alt='inVision'/>
            </div>
        </div>

        {/* SECTION FOUR */}
        <div className="blocks-section">
            <div className="blocks-container">
                <div className="blocks-header">
                    <h1>Massa tempor nec feugiat nisl pretium fusce</h1>
                    <p>Pellentesque <span>habitant</span> morbi tristique senectus et
                        netus et malesuada. <span>Ipsum faucibus vitae</span> aliquet
                        nec ullamcorper sit amet risus nullam. Dictum 
                        varius duis at consectetur <span>lorem donec</span> massa sapien.
                        Massa tempornec feugiat nisl pretium fusce. </p>
                    <p>Elit scelerisque mauris pellentesque?   </p>
                </div>
            </div>
            <div className="blocks-container">
                <div className="one-block">
                    <img src={blockone} onMouseOver={e => e.currentTarget.src = circleWhite} onMouseOut={e => e.currentTarget.src = blockone}  />
                </div>
                <div className="one-block">
                    <img src={blocktwo} onMouseOver={e => e.currentTarget.src = scissorsWhite} onMouseOut={e => e.currentTarget.src = blocktwo}  />
                </div>
                <div className="one-block">
                    <img src={androidGrey} onMouseOver={e => e.currentTarget.src = androidWhite} onMouseOut={e => e.currentTarget.src = androidGrey}  />
                </div>
                <div className="one-block">
                    <img src={blockfour} onMouseOver={e => e.currentTarget.src = plusnminusWhite} onMouseOut={e => e.currentTarget.src = blockfour}  />
                </div>
            </div>
        </div>   


        {/* SECTION FIVE */}
    <div className='subscribe-container'>
      <section className='subscription'>
        <h2 className='subscription-heading'>
        Subscribe to our newsletter
        </h2>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Company e-mail address' />
            <button className='btn-primary btn-outline'>Subscribe</button>
            <p className='subscription-text'>
            Chupa chups gummi bears shortbread candy
            </p>
          </form>
        </div>
      </section>
        </div>
    </div>
  )
}

export default Overview