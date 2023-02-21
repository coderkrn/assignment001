import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ContentHeader from './ContentHeader' 
import ContentContainer from './ContentContainer' 
import MsgContent from './MsgContent'


function Content() {
  let location = useLocation();
    useEffect(() => {
    }, [location]);

  return (
    <>
      <div className='content' id='content'>
      <ContentHeader/>
     {location.pathname === '/message-requests' ? <MsgContent/> : <ContentContainer/>}
     {/* <ContentContainer/> */}
      </div>
    </>
  )
}

export default Content