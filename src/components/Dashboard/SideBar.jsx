import React from 'react'
import { useSelector } from 'react-redux';
import { Loading } from '../Loading';
import { sidebarLinks } from '../../data/dashboard-links';
import { SiderLinks } from './SiderLinks';

export const SideBar = () => {
 
    const {loading} = useSelector((state)=>state.auth)
  return (
    <div>
       {
        loading === true?(<div>
            <Loading/>
        </div>):(<div>
            {sidebarLinks.map((data)=>{
                return <SiderLinks key={data.id} name={data.name} path={data.path} type={data.type} icon={data.icon}/>})
            }
        </div>)
}
    </div>
  )
}
