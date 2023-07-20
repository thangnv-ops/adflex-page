import React from 'react'
import Label from './Label'

const leaders = [
  {
    id: 'leader1',
    name: 'PHẠM PHƯƠNG TÚ',
    title: 'Chief Executive Officer',
    avatar: '/images/leaders/phuongtu.png',
  },
  {
    id: 'leader2',
    name: 'HOÀNG MẠNH TIẾN',
    title: 'Chief Technology Officer',
    avatar: '/images/leaders/manhtien.png',
  },
  {
    id: 'leader3',
    name: 'NGÔ VIỆT NHẬT',
    title: 'Chief Operations Officer',
    avatar: '/images/leaders/vietnhat.png',
  },
  {
    id: 'leader4',
    name: 'CAMMY KIM CHI',
    title: 'Chief Commercial Officer',
    avatar: '/images/leaders/kimchi.png',
  },
]

function Leader() {
  return (
    <div className="relative z-10 -mt-14">
      <div className="px-4 mx-auto max-w-maxContent">
        <Label
          startColor="#BA5850"
          stopColor="#C06962"
          className="bg-gradient-to-r from-[#BA5850] to-[#C06962]"
        >
          Đội ngũ lãnh đạo
        </Label>
      </div>
      <div
        style={{
          backgroundImage: 'url(/images/leader-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        className="py-[10px]"
      >
        <div className="px-4 mx-auto max-w-maxContent">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {leaders.map((leader) => (
              <div key={leader.id}>
                <img src={leader.avatar} alt="avatar" />
                <div className="px-0 py-2 text-black md:px-6">
                  <p className="text-lg font-bold md:text-2xl">{leader.name}</p>
                  <p className="text-sm md:text-lg">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leader
