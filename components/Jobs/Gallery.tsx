import useDevice from '@/hooks/useDevice'
import React from 'react'

const images = [1, 2, 3, 4, 5]

function Gallery() {
  const isMobile = useDevice()
  const listRender = isMobile ? images.slice(1, images.length) : images
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="grid grid-cols-2 px-0 mx-auto mt-32 md:px-4 max-w-maxContent md:grid-cols-5"
    >
      {listRender.map((img) => (
        <div>
          <img src={`images/jobs/gallery/${img}.png`} alt="img" />
        </div>
      ))}
    </div>
  )
}

export default Gallery
