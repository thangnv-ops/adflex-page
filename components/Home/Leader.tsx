import Image from 'next/image'
import Label from './Label'
import useTranslation from '@/hooks/useTranslation'

const leaders = [
  {
    id: 'leader1',
    name: 'PHẠM PHƯƠNG TÚ',
    title: 'Chief Executive Officer',
    avatar: '/images/leaders/phuongtu.png',
  },
  {
    id: 'leader3',
    name: 'NGÔ VIỆT NHẬT',
    title: 'Chief Operations Officer',
    avatar: '/images/leaders/vietnhat.png',
  },
  {
    id: 'leader4',
    name: 'CAMY KIM CHI',
    title: 'Chief Customer Officer',
    avatar: '/images/leaders/kimchi.png',
  },
  {
    id: 'leader2',
    name: 'HOÀNG MẠNH TIẾN',
    title: 'Chief Technology Officer',
    avatar: '/images/leaders/manhtien.jpg',
  },
]

function Leader() {
  const transRes = useTranslation(['Đội ngũ lãnh đạo'])
  return (
    <div className="relative z-10 -mt-14">
      <div data-aos="fade-up" data-aos-duration="700" className="px-4 mx-auto max-w-maxContent">
        <Label
          startColor="#BA5850"
          stopColor="#C06962"
          className="bg-gradient-to-r from-[#BA5850] to-[#C06962]"
        >
          {transRes[0]}
        </Label>
      </div>
      <div
        style={{
          backgroundImage: 'url(/images/leader-bg.png)',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-[10px] bg-cover"
      >
        <div className="px-4 mx-auto max-w-maxContent">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {leaders.map((leader, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={300 + 100 * index}
                key={leader.id}
              >
                <div className="w-full aspect-square relative">
                  <Image fill src={leader.avatar} alt="avatar" />
                </div>
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
