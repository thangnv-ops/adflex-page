import { blogEndpoints, getEndpoint } from '@/lib/endpoints'
import { Card, CardBody, Pagination } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { BlogRes } from '@/backend/service/blog-service/blog-res'
import { useApiCall } from '@/hooks/useCallApi'
import useTranslation from '@/hooks/useTranslation'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import CopyIcon from '../icons/CopyIcon'
import FacebookIcon from '../icons/FacebookIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import SubcribeIcon from '../icons/SubcribeIcon'
import TwitterIcon from '../icons/TwitterIcon'
import { NewsItem } from './NewsItem'
import { NewsLoading } from './NewsLoading'

function BlogDetail() {
  const [page, setPage] = useState(1)

  const getList = useApiCall<CommonListResult<BlogRes>, string>({
    callApi: () =>
      axios.get(
        `${getEndpoint(blogEndpoints, 'getList')}?page=${page}&size=3&sort_createdDate=DESC`
      ),
    handleError(status, message) {
      toast.error(message)
    },
  })

  const router = useRouter()

  const getDetail = useApiCall<CommonListResult<BlogRes>, string>({
    callApi: () =>
      axios.get(`${getEndpoint(blogEndpoints, 'getList')}?slug=${router.query.slug}&page=1&size=1`),
    handleError(status, message) {
      toast.error(message)
    },
  })

  useEffect(() => {
    if (router.query.slug) {
      getDetail.setLetCall(true)
    }
  }, [router])

  const detail = getDetail?.data?.result?.data[0] || new BlogRes()

  const { data } = getList

  const handleCallList = () => {
    getList.setLetCall(true)
  }

  useEffect(() => {
    handleCallList()
  }, [page])

  const belowList = data?.result?.data || []

  const tranRes = useTranslation([
    'Tin tức',
    'Ngày đăng',
    'Đăng ký nhận tin',
    'Đừng bỏ lỡ những tin tức và sự kiện mới nhất, những bài viết và mẹo thú vị từ Adflex.',
    'Nhận thông tin',
    'Tất cả tin tức',
  ])

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        style={{
          backgroundImage: 'url(/images/cpa/cpa-hero-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="h-auto px-4 pt-56 pb-32 text-center"
      >
        <p className="text-lg md:text-2xl">{tranRes[0]}</p>
        <p className="mt-2 text-[30px] md:text-5xl">{detail.title}</p>
      </div>
      <div className="px-4 pt-12 mx-auto text-black max-w-maxContent">
        <div className="w-full aspect-[2/1] max-h-[516px] overflow-hidden">
          <div className="w-full aspect-[2/1] relative">
            {detail.thumbnail && (
              <Image
                data-aos="fade-up"
                data-aos-duration="700"
                src={detail.thumbnail}
                alt="thumbnail"
                fill
              />
            )}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col items-start justify-between mt-8 md:flex-row md:items-center"
        >
          <p className="">
            {tranRes[1]} <span className="font-semibold">{detail.createdDate}</span>
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-3 px-4 py-2 bg-black border border-black rounded border-opacity-20 bg-opacity-5"
            >
              <CopyIcon /> Copy link
            </button>
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="max-w-[1146px] mx-auto px-4 grid grid-cols-1 md:grid-cols-64 gap-20 mt-12"
        >
          <div
            className="text-justify blog-detail-style"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          />
          <div className="flex flex-col p-8 bg-black border border-black rounded-2xl bg-opacity-10 border-opacity-20 h-min">
            <SubcribeIcon />
            <p className="mt-8 md:text-2xl text-primary"> {tranRes[2]}</p>
            <p className="text-[#475467] mt-3">{tranRes[3]}</p>
            <PrimaryInput placeholder="Nhập email của bạn" className="mt-8" />
            <PrimaryBtn className="mt-4">{tranRes[4]}</PrimaryBtn>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto text-black max-w-maxContent">
        <p data-aos="fade-up" data-aos-duration="700" className="mt-20 text-2xl font-semibold">
          {tranRes[5]}
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3"
        >
          {!getList.loading && belowList.map((news) => <NewsItem key={news._id} news={news} />)}
          {getList.loading && [1, 2, 3].map(() => <NewsLoading />)}
        </div>
        <Card className="my-10" radius="none" shadow="sm">
          <CardBody>
            <Pagination
              radius="none"
              total={(getList.data?.result.total || 0) / 3 + 1}
              page={page}
              onChange={(thisPage) => {
                setPage(thisPage)
              }}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default BlogDetail
