import React from 'react'

function VideoModal({vidLink, videoModal, setvideoModal,vidTitle}) {
  return (
<div className=" absolute w-full z-20 min-h-screen bg-black-300 animated fadeIn faster bg-black opacity-90 inset-0 py-6 flex flex-col items-center justify-start sm:py-12">
  <div className="py-3 w-fit p-10 flex-shrink">
    <div className="bg-white  flex flex-col rounded-xl shadow-lg">
        {/* main container */}
      <div className="px-12 py-5">
        <h2 className="text-gray-800 text-3xl font-semibold">{vidTitle}</h2>
      </div>

      <div className="bg-gray-200 w-full flex flex-col items-center px-0">
      <iframe className='w-full'
        src={vidLink}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        width=''
        height='250px'
        title="video"
      />
      </div>
      <div className="h-20 flex items-center justify-center">
        <p onClick={()=>setvideoModal(!videoModal)} className="text-gray-600">Cancel</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default VideoModal