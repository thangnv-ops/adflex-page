import React from 'react'
import Map from '../Map'
import { NewsItem } from './NewsItem'
import { Tag } from './Tag'

const featuredNews = [
  {
    id: 'news1',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/21/5f3b7fcb9b9448ca1185-168987373-1757-6558-1689897704.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=RQesYEI_K2WMCu5QuDOiGw',
    title: 'UX review presentations',
    shortDescription:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    date: '20-06-2022',
    tags: ['design', 'research', 'presentation'],
  },

  {
    id: 'news2',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/20/AI-9153-1689844552.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=2bMtU2XDNzozWumkP1R5CA',
    title: 'Migrating to Linear 101',
    shortDescription:
      'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get.',
    date: '20-06-2022',
    tags: ['design', 'research', 'presentation'],
  },
  {
    id: 'news3',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/20/DSCF3233-9811-1689787856.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gVKPhe_-o3bGV8Ni-56Yyw',
    title: 'Building your API Stack',
    shortDescription:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    date: '20-06-2022',
    tags: ['design', 'research'],
  },
]

const allNews = [
  {
    id: 'news1',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/21/5f3b7fcb9b9448ca1185-168987373-1757-6558-1689897704.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=RQesYEI_K2WMCu5QuDOiGw',
    title: 'UX review presentations',
    shortDescription:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    date: '20-06-2022',
    tags: ['design', 'research', 'presentation'],
  },
  {
    id: 'news2',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/20/AI-9153-1689844552.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=2bMtU2XDNzozWumkP1R5CA',
    title: 'Migrating to Linear 101',
    shortDescription:
      'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get.',
    date: '20-06-2022',
    tags: ['design', 'research', 'presentation'],
  },
  {
    id: 'news3',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/20/DSCF3233-9811-1689787856.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gVKPhe_-o3bGV8Ni-56Yyw',
    title: 'Building your API Stack',
    shortDescription:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    date: '20-06-2022',
    tags: ['design', 'research'],
  },
  {
    id: 'news4',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/20/DSCF3233-9811-1689787856.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gVKPhe_-o3bGV8Ni-56Yyw',
    title: 'Building your API Stack',
    shortDescription:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    date: '20-06-2022',
    tags: ['design', 'research'],
  },
  {
    id: 'news5',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/20/DSCF3233-9811-1689787856.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gVKPhe_-o3bGV8Ni-56Yyw',
    title: 'Building your API Stack',
    shortDescription:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    date: '20-06-2022',
    tags: ['design', 'research'],
  },
  {
    id: 'news6F',
    thumbnail:
      'https://i1-sohoa.vnecdn.net/2023/07/20/DSCF3233-9811-1689787856.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gVKPhe_-o3bGV8Ni-56Yyw',
    title: 'Building your API Stack',
    shortDescription:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    date: '20-06-2022',
    tags: ['design', 'research'],
  },
]

function Blog() {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        style={{
          backgroundImage: 'url(/images/blog/blog-hero-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="h-auto px-4 pt-56 pb-32 text-center"
      >
        <p className="text-lg md:text-2xl">Tin tức</p>
        <p className="mt-2 text-[30px] md:text-5xl">Những cập nhật mới nhất từ Adflex</p>
      </div>
      <div className="px-4 py-20 mx-auto text-black max-w-maxContent">
        <p data-aos="fade-up" data-aos-duration="700" className="text-2xl font-semibold">
          Tin tức mới nhất
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2"
        >
          <div className="row-span-2">
            <NewsItem news={featuredNews[0]} />
          </div>
          {featuredNews.slice(1, featuredNews.length).map((news) => (
            <div key={news.id} className="grid items-center gap-6 grid-cols-46">
              <div className="h-full">
                <img src={news.thumbnail} alt="thumbnail" className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-sm text-[#667085]">{news.date}</p>
                <p className="mt-3 text-xl font-medium md:text-lg">{news.title}</p>
                <p className="text-sm md:text-báe mt-2 text-[#878A99]">{news.shortDescription}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {news.tags.map((tag, index) => (
                    <Tag key={`tag-${index}`} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p data-aos="fade-up" data-aos-duration="700" className="mt-20 text-2xl font-semibold">
          Tất cả tin tức
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3"
        >
          {allNews.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Blog
