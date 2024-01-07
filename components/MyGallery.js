

import {Item } from 'react-photoswipe-gallery'

const MyGallery = (prop) => (
 
    <Item
      original={prop.img}
      thumbnail={prop.img}
      width={prop.w}
      height={prop.h}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} className=' rounded-md mx-auto  mt-6   hover:cursor-pointer' src={"/low" +prop.img} />
      )}
    </Item>
   
  
)

export default MyGallery