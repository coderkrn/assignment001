import React from 'react'

function MenuNav() {
    return (
        <>
            <div className='MenuNav'>
                <div className='search-box'>
                    <div>
                        <input type='text' placeholder='Find or start a conversation' />
                    </div>
                </div>

                <div className='menu'>

                    <ul>
                        <li ><a href='/' className='message-req'><i className="fa-solid fa-envelope"></i>Message Request</a></li>

                    </ul>

                </div>
            </div>
        </>

    )
}

export default MenuNav