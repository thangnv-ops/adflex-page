import Line from '@/components/Line'
import VerticalLine from '@/components/VerticalLine'
import useTranslation from '@/hooks/useTranslation'
import DoneStep from './DoneStep'
import Step from './Step'

const steps = ['Phân tích', 'Lên kế hoạch', 'Triển khai', 'Bàn giao', 'Hỗ trợ sau bàn giao']

function StepBar({ goToSlide, activatingSlide }: { goToSlide: any; activatingSlide: number }) {
  const tranStep = useTranslation(steps)

  return (
    <div>
      <div className="hidden md:block">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-4 max-w-[808px] mx-auto"
        >
          <Line className="h-[2px]" />
          <Line className="h-[2px]" />
          <Line className="h-[2px]" />
          <Line className="h-[2px]" />
        </div>
        <div className="grid grid-cols-5 items-center max-w-[1005px] mx-auto -mt-[26px]">
          {tranStep.map((step, index) => {
            const isActive = index === activatingSlide
            const isDone = index < activatingSlide
            return (
              <div
                key={step}
                onClick={() => goToSlide(index)}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={500 + 200 * index}
                className="flex flex-col items-center cursor-pointer smooth-transform"
              >
                {isDone ? <DoneStep /> : <Step isActive={isActive} />}
                <p
                  className={`mt-4 text-2xl smooth-transform whitespace-nowrap ${
                    isActive ? 'text-primary' : 'text-black'
                  }`}
                >
                  {step}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex md:hidden max-w-[300px] mx-auto">
        <div data-aos="fade-up" data-aos-duration="700" className="flex flex-col">
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
        </div>
        <div className="flex flex-col -mt-[24px] -ml-5 text-black gap-9">
          {steps.map((step, index) => {
            const isActive = index === activatingSlide
            const isDone = index < activatingSlide
            return (
              <div
                key={step}
                onClick={() => goToSlide(index)}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={500 + 200 * index}
                className="flex items-center gap-3 cursor-pointer smooth-transform"
              >
                <div className={`${isActive && '-ml-1'} smooth-transform`}>
                  {isDone ? (
                    <DoneStep />
                  ) : (
                    <div className={`${!isActive && '-ml-1'} smooth-transform`}>
                      <Step isActive={isActive} />
                    </div>
                  )}
                </div>
                <p
                  className={`mt-4 text-2xl smooth-transform whitespace-nowrap ${
                    isActive ? 'text-primary' : 'text-black'
                  }`}
                >
                  {step}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StepBar
