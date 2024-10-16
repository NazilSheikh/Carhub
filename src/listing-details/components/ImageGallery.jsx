// import React from 'react'

// function ImageGallery({carDetail}) {
//   return (
//     <div>
//         <img src={carDetail?.images[0]?.imageUrl} 
//          className='w-full h-[500px] rounded-xl '
//         />
//     </div>
//   )
// }

// export default ImageGallery

import React from 'react';

function ImageGallery({ carDetail }) {
  return (
    // AFTER THIS WE HAD MADE THE CAR DESCRIPTION : 
    <div>
      {carDetail?.images?.[0] ? (
        <img
          src={carDetail.images[0].imageUrl}
          className="w-full h-[500px] rounded-xl object-cover" 
          alt="Car"
        />
      ) : (
        <p>No image available</p> // Fallback in case there's no image
      )}
    </div>
  );
}

export default ImageGallery;
