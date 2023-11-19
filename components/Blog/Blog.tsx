import { Card, CardBody, Pagination } from '@nextui-org/react'
import { blogEndpoints, getEndpoint } from '@/lib/endpoints'
import { useEffect, useState } from 'react'

import { BlogRes } from '@/backend/service/blog-service/blog-res'
import { CommonListResult } from 'common-abstract-fares-system'
import Image from 'next/image'
import Link from 'next/link'
import Map from '../Map'
import { NewsItem } from './NewsItem'
import { NewsLoading } from './NewsLoading'
import { Tag } from './Tag'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useApiCall } from '@/hooks/useCallApi'
import useTranslation from '@/hooks/useTranslation'

function Blog() {
  const [page, setPage] = useState(1)

  const getList = useApiCall<CommonListResult<BlogRes>, string>({
    callApi: () =>
      axios.get(
        `${getEndpoint(blogEndpoints, 'getList')}?page=${page}&size=9&sort_createdDate=DESC`
      ),
    handleError(status, message) {
      toast.error(message)
    },
  })

  const { data } = getList

  const handleCallList = () => {
    getList.setLetCall(true)
  }

  useEffect(() => {
    handleCallList()
  }, [page])

  const headList = data?.result?.data.filter((item, index) => index < 3) || []
  const belowList = data?.result?.data.filter((item, index) => index >= 3) || []

  const tranRes = useTranslation([
    'Tin tức',
    'Những cập nhật mới nhất từ Adflex',
    'Tin tức mới nhất',
    'Tất cả tin tức',
  ])

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
        <p className="text-lg md:text-2xl">{tranRes[0]}</p>
        <p className="mt-2 text-[30px] md:text-5xl">{tranRes[1]}</p>
      </div>
      <div className="px-4 py-20 mx-auto text-black max-w-maxContent">
        <p data-aos="fade-up" data-aos-duration="700" className="text-2xl font-semibold">
          {tranRes[2]}
        </p>
        {getList.loading && <NewsLoading />}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2"
        >
          {!getList.loading && headList.length > 0 && (
            <div className="row-span-2">
              <NewsItem news={headList[0]} />
            </div>
          )}
          {headList.slice(1, headList.length).map((news) => (
            <Link
              href={`/blog/${news.slug}`}
              key={news._id}
              className="grid items-center gap-6 grid-cols-46"
            >
              <>
                <div className="w-full aspect-[2/1.5] relative">
                  <Image fill src={news.thumbnail} alt="thumbnail" />
                </div>
                <div>
                  <p className="text-sm text-[#667085]">{news.createdDate}</p>
                  <p className="mt-3 text-xl font-medium md:text-lg">{news.title}</p>
                  <p className="text-sm md:text-báe mt-2 text-[#878A99]">{news.shortDescription}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    {news.tags.map((tag, index) => (
                      <Tag key={`tag-${index}`} tag={tag} />
                    ))}
                  </div>
                </div>
              </>
            </Link>
          ))}
        </div>

        <p data-aos="fade-up" data-aos-duration="700" className="mt-20 text-2xl font-semibold">
          {tranRes[3]}
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3"
        >
          {getList.loading && [1, 2, 3].map(() => <NewsLoading />)}
          {!getList.loading && belowList.map((news) => <NewsItem key={news._id} news={news} />)}
        </div>
        <Card className="my-10" radius="none" shadow="sm">
          <CardBody>
            <Pagination
              radius="none"
              total={Math.floor((getList.data?.result.total || 0) / 9) + 1}
              page={page}
              onChange={(thisPage) => {
                setPage(thisPage)
              }}
            />
          </CardBody>
        </Card>
      </div>
      <Map />
    </div>
  )
}

export default Blog
