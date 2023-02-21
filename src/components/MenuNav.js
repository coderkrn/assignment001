import React from 'react'



function MenuNav() {
    return (
            <div className='MenuNav'>
                <div className='search-box'>
                    <div>
                        <input type='text' placeholder='Find or start a conversation' />
                    </div>
                </div>

                <div className='menu'>
                    <ul>
                        <li ><a href='/' className='friends'><i className="fa-solid fa-users"></i> Friends </a></li>
                        <li className='online'><a href='/'> Online </a></li>
                        <li><a href='/'> All </a></li>
                        <li><a href='/'> Pending </a></li>
                        <li><a href='/'> Blocked </a></li>
                        <li><a href='/' className='addFriend'> Add Friend </a></li>

                    </ul>

                </div>
            </div>
 
    )
}

export default MenuNav