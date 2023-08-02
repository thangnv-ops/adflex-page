import Link from 'next/link'
import { Tag } from './Tag'

interface News {
  id: string
  thumbnail: string
  title: string
  shortDescription: string
  date: string
  tags: string[]
}

export function NewsItem({ news }: { news: News }) {
  return (
    <Link href="/blog/1">
      <a>
        <div className="cursor-pointer">
          <img src={news.thumbnail} alt="thumbnail" className="max-h-[230px] w-full object-cover" />
          <p className="text-sm text-[#667085] mt-8">{news.date}</p>
          <p className="mt-3 text-xl font-medium md:text-2xl">{news.title}</p>
          <p className="text-sm md:text-báe mt-3 text-[#878A99]">{news.shortDescription}</p>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {news.tags.map((tag, index) => (
              <Tag key={`tag-${index}`} tag={tag} />
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
