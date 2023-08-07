import Title from '../Title'
import CPASolution from './CPASolution'
import OpsRunSolution from './OpsRunSolution'
import PushtimizeSolution from './PushtimizeSolution'
/* eslint-disable @next/next/no-img-element */
import useTranslation from '@/hooks/useTranslation'

function Solution() {
  const result = useTranslation(['Giải pháp của chúng tôi'])
  return (
    <div className="px-4 mx-auto max-w-maxContent">
      <Title className="mt-14">{result[0]}</Title>
      <div className="flex items-center justify-center mt-5">
        <div className="relative">
          <img
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="800"
            src="/images/solution-img.svg"
            alt="solution"
          />
          <div className="absolute top-[96px] -left-[300px] hidden md:block">
            <CPASolution />
          </div>
          <div className="absolute -bottom-[40px] -left-[190px] hidden md:block">
            <OpsRunSolution />
          </div>
          <div className="absolute top-[220px] -right-[350px] hidden md:block">
            <PushtimizeSolution />
          </div>
          <div className="block md:hidden">
            <CPASolution />
          </div>
          <div className="block mt-4 md:hidden">
            <OpsRunSolution />
          </div>
          <div className="block mt-4 md:hidden">
            <PushtimizeSolution />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
