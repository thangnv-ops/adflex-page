import Image from 'next/image'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import CopyIcon from '../icons/CopyIcon'
import FacebookIcon from '../icons/FacebookIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import SubcribeIcon from '../icons/SubcribeIcon'
import TwitterIcon from '../icons/TwitterIcon'
import { NewsItem } from './NewsItem'

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

const detail = `<h1>Vụ sáp nhập đắt giá nhất giới công nghệ sắp tới hồi kết</h1>
<p>
    <br>
</p>
<p>Microsoft và đế chế game Activision Blizzard đang tiến đến giai đoạn hoàn tất thương vụ trị giá 69 tỷ USD, lớn nhất trong lĩnh vực công nghệ.</p>
<ul>
    <li>Ngày 16/7, Microsoft ký thỏa thuận với Sony nhằm đảm bảo thương hiệu&nbsp;
        <em>Call of Duty</em>&nbsp;nổi tiếng của Activision Blizzard vẫn tồn tại trên nền tảng PlayStation trong ít nhất một thập kỷ nếu vụ sáp nhập diễn ra thành công. Sony được đánh giá là yếu tố quan trọng nhất trong việc ngăn công ty phần mềm Mỹ tiếp
        quản Activision Blizzard. Thỏa thuận mới có thể làm giảm những lo ngại xung quanh tác động tiềm ẩn ở lĩnh vực trò chơi, nhất là vấn đề độc quyền.</li>
</ul>
<p>
    <br>
</p>
<p>Hai ngày trước đó, tòa án Mỹ từ chối yêu cầu của Ủy ban Thương mại Liên bang Mỹ (FTC) về việc dừng thương vụ. Hồi tháng 4, FTC gửi đơn kiện nhằm ngăn kế hoạch mua Activision Blizzard của Microsoft với lý do công ty phần mềm Mỹ có thể tạo vị thế độc quyền,
    gây tác động xấu lên đối thủ cạnh tranh.</p>
<p>
    <br>
</p>
<p>Tại châu Âu, Microsoft cũng đã vượt qua một số rào cản lớn, như được Ủy ban châu Âu thông qua quá trình sáp nhập. Khó khăn cuối cùng nằm ở chính phủ Anh, khi Cơ quan Cạnh tranh và Thị trường nước này đã phủ quyết thỏa thuận hồi tháng 4. Dù vậy, trong
    tuyên bố ngày 13/7, họ quyết định cho Microsoft cơ hội đưa ra biện pháp nhằm thuyết phục họ đồng ý.</p>
<p>
    <br>
</p>
<p>Ngày 17/7, Tòa án Phúc thẩm London bắt đầu xem xét việc cho phép Microsoft mua Activision Blizzard. Trong khi đó, hãng phần mềm Mỹ được cho là sẽ từ bỏ một số mảng kinh doanh trò chơi trên nền tảng đám mây nhằm đẩy nhanh việc đạt thỏa thuận.</p>
<p>Tháng 1/2022, Microsoft tuyên bố chi 68,7 tỷ USD mua lại Activision Blizzard - hãng game có trụ sở ở California. Đây là&nbsp;
    <a href="https://vnexpress.net/microsoft-chi-69-ty-usd-mua-cong-ty-game-4418029.html" target="_blank" style="color: rgb(7, 109, 182);">vụ sáp nhập</a>&nbsp;lớn nhất trong lĩnh vực công nghệ, vượt qua sự kiện Dell mua EMC giá 67 tỷ USD năm 2016. Số tiền cũng vượt xa mức 26 tỷ USD&nbsp;
    <a href="https://vnexpress.net/chu-de/microsoft-1553" target="_blank" style="color: rgb(7, 109, 182);">Microsoft</a>&nbsp;từng bỏ ra để mua LinkedIn.</p>
<p>
    <br>
</p>
<p>Giới công nghệ nhận định nếu thành công, thương vụ sẽ giúp Microsoft có thêm lợi thế trong lĩnh vực game. Họ sẽ trở thành công ty game lớn thứ ba toàn cầu sau&nbsp;
    <a href="https://vnexpress.net/chu-de/tencent-3222" target="_blank" style="color: rgb(7, 109, 182);">Tencent</a>&nbsp;của Trung Quốc và Sony của Nhật Bản. Activision Blizzard là một trong những hãng game lớn nhất với hơn 10.000 nhân viên khắp thế giới, thu hút 400 triệu người dùng hàng tháng tại 190 quốc gia. Công ty sở hữu nhiều trò chơi đình đám
    như&nbsp;
    <em>Warcraft, Diablo, Overwatch, Call of Duty&nbsp;</em>và
    <em>&nbsp;Candy Crush Saga</em>.</p>
<p>
    <br>
</p>
<p>Dù vậy, thời gian qua, Microsoft liên tục vướng rào cản từ các cơ quan quản lý trên toàn cầu, chủ yếu là Mỹ và châu Âu. Nếu thất bại, Microsoft có thể phải trả khoản phí "chia tay" trị giá 3 tỷ USD. Dự kiến, thương vụ hoàn tất trong tháng này.</p>`

function BlogDetail() {
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
        <p className="text-lg md:text-2xl">Tin tức</p>
        <p className="mt-2 text-[30px] md:text-5xl">Bill Walsh leadership lessons</p>
      </div>
      <div className="px-4 pt-12 mx-auto text-black max-w-maxContent">
        <div className="w-full aspect-[2/1] max-h-[516px] relative">
          <Image
            data-aos="fade-up"
            data-aos-duration="700"
            src="https://i1-sohoa.vnecdn.net/2023/07/18/cloudfront-us-east-2-images-ar-8152-9755-1689668007.png?w=680&h=0&q=100&dpr=2&fit=crop&s=xOpOyzzM7wTabgrJMMO63Q"
            alt="thumbnail"
            fill
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col items-start justify-between mt-8 md:flex-row md:items-center"
        >
          <p className="">
            Ngày đăng <span className="font-semibold">20-06-2022</span>
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
            dangerouslySetInnerHTML={{ __html: detail }}
          />
          <div className="flex flex-col p-8 bg-black border border-black rounded-2xl bg-opacity-10 border-opacity-20 h-min">
            <SubcribeIcon />
            <p className="mt-8 md:text-2xl text-primary">Đăng ký nhận tin</p>
            <p className="text-[#475467] mt-3">
              Đừng bỏ lỡ những tin tức và sự kiện mới nhất, những bài viết và mẹo thú vị từ Adflex.
            </p>
            <PrimaryInput placeholder="Nhập email của bạn" className="mt-8" />
            <PrimaryBtn className="mt-4">Nhận thông tin</PrimaryBtn>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto text-black max-w-maxContent">
        <p data-aos="fade-up" data-aos-duration="700" className="mt-20 text-2xl font-semibold">
          Tất cả tin tức
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3"
        >
          {featuredNews.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
