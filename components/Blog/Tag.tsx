import { getTagBackgroundColor } from '@/lib/getTagBackgroundColor'

export function Tag({ tag }: { tag: string }) {
  return (
    <div
      style={{ backgroundColor: getTagBackgroundColor(tag) }}
      className="text-sm rounded px-[10px] capitalize"
    >
      {tag}
    </div>
  )
}
