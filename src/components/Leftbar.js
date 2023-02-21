import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'




function Leftbar() {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    return (
        <>
           
                    <div className='leftbar'>
                        <div className='main-container'>
                            <div className='main-options'>
                                <div className='box'>
                                    <div className={`friends option ${location.pathname === '/friends' ? "active" : ""} `}>
                                        <Link to='/friends' className='option'>
                                            <i className="fa-solid fa-users"></i>Friends
                                        </Link>
                                    </div>
                                    <div className={`message-requests option ${location.pathname === '/message-requests' ? "active" : ""}`}>
                                        <Link to='/message-requests' className='option'>
                                            <i className="fa-solid fa-envelope"></i>Message Request
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='dm'>
                                <div className='heading'>
                                    <p className='text'>DIRECT MESSAGES</p> <p className='plus'>+</p>
                                </div>
                            </div>
                        </div>


                    </div>
                   
        </>
    )
}

export default Leftbar