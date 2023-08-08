import { CircularProgress } from '@nextui-org/react'

export const BackDrop = () => {
  return (
    <div
      className="w-screen h-screen fixed flex justify-center items-center backdrop-blur-sm bg-transparent z-[1000]"
      onClick={(e) => e.stopPropagation()}
    >
      <CircularProgress aria-label="Loading..." />
    </div>
  )
}
