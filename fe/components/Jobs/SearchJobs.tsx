import React from 'react'
import PrimaryInput from '../PrimaryInput'
import PrimaryBtn from '../PrimaryBtn'
import SearchIcon from '../icons/SearchIcon'

function SearchJobs() {
  return (
    <div data-aos="fade-up" data-aos-duration="700" className="max-w-[1126px] mx-auto px-4">
      <div
        style={{ boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)' }}
        className="flex flex-col px-4 py-10 bg-white rounded-lg md:px-10"
      >
        <p className="text-[30px] md:text-[40px] text-black text-center">
          Cơ hội việc làm tại Adflex
        </p>
        <div className="max-w-[720px] w-full mx-auto grid grid-cols-1 md:grid-cols-73 items-center gap-2">
          <PrimaryInput placeholder="Tìm kiếm việc làm" className="max-w-[496px] w-full" />
          <PrimaryBtn className="flex justify-center w-full">
            <div className="flex items-center gap-2">
              <SearchIcon />
              <p className="">Tìm kiếm</p>
            </div>
          </PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default SearchJobs
