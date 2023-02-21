import React from 'react'

function ContentContainer() {
  return (
    <>
     <div className='container'>
          <div className='content-nav'>
            <div className='text'>Online - 2</div>
          </div>
          <div className='main-content'>
            <div className='userList'>
              <div className='user'>
                <div className='leftSide'>
                  <i className="fa-sharp fa-solid fa-user"></i>
                  <div className='details'>
                    <div className='name'>username@1</div>
                    <div className='tag'>idle</div>
                  </div>
                </div>
                <div className='rightSide'>
                  <i class="fa-solid fa-message"></i>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div className='user'>
                <div className='leftSide'>
                  <i className="fa-sharp fa-solid fa-user"></i>
                  <div className='details'>
                    <div className='name'>username@1</div>
                    <div className='tag'>idle</div>
                  </div>
                </div>
                <div className='rightSide'>
                  <i class="fa-solid fa-message"></i>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ContentContainer