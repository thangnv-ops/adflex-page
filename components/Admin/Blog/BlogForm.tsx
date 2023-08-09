import { BlogReq, BlogRequestError } from '@/backend/service/blog-service/blog-req'
import RichTextEditor from '@/components/Editor'
import { UploadFileBase64 } from '@/components/UploadFileBase64'
import { Button, Card, CardBody, CardFooter, Divider, Input } from '@nextui-org/react'
import Image from 'next/image'
import { useEffect } from 'react'

interface IBlogForm {
  blog: BlogReq
  setBlog: (value: BlogReq) => void
  error?: BlogRequestError
}

export const BlogForm = ({ blog, setBlog, error }: IBlogForm) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.id]: e.target.value })
  }

  const validate = (field: string) => {
    return error && !!error[field] ? 'invalid' : 'valid'
  }

  const moreContent = () => {
    setBlog({ ...blog, tags: [...blog.tags, ''] })
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({
      ...blog,
      tags: blog.tags.map((item, index) => {
        if (e.target.id === String(index)) {
          return e.target.value
        }
        return item
      }),
    })
  }

  const deleteContent = (thisIndex: number) => {
    setBlog({
      ...blog,
      tags: blog.tags.filter((item, index) => index !== thisIndex),
    })
  }

  useEffect(() => {
    setBlog({
      ...blog,
      slug: blog.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, ''),
    })
  }, [blog.title])

  return (
    <div className=" w-full gap-4 flex flex-col gap-4 h-full overflow-auto">
      <Input
        id="title"
        type="text"
        label="Title"
        placeholder="Enter title"
        isRequired
        validationState={validate('title')}
        errorMessage={error?.title}
        value={blog.title}
        onChange={onChange}
      />
      <Input
        id="slug"
        type="text"
        label="Slug"
        placeholder="Enter slug"
        isRequired
        validationState={validate('slug')}
        errorMessage={error?.slug}
        value={blog.slug}
        onChange={onChange}
      />
      <Input
        id="shortDescription"
        type="text"
        label="Short description"
        placeholder="Enter shortDescription"
        isRequired
        validationState={validate('shortDescription')}
        errorMessage={error?.shortDescription}
        value={blog.shortDescription}
        onChange={onChange}
      />
      <UploadFileBase64
        labelInput="Upload thumbnail"
        handleUploadFile={(value) => setBlog({ ...blog, thumbnail: value })}
      />
      {!!blog.thumbnail && <Image width={500} height={500} src={blog.thumbnail} alt="" />}
      <Divider className="my-4" />
      <h5>Content {error?.content && <div className="text-red">{error?.content}</div>}</h5>
      <RichTextEditor
        editorState={blog.content}
        handleChange={(value) => setBlog({ ...blog, content: value })}
      />
      <Divider className="my-4" />
      <h5>Tags {error?.tags && <div className="text-red">{error?.tags}</div>}</h5>
      <div className="max-w-[300px] max-h-[200px] overflow-auto">
        <div className=" w-full gap-4 flex flex-col gap-4 p-4">
          {blog.tags.map((item, index) => (
            <Card key={`${index}`}>
              <CardBody>
                <Input
                  id={String(index)}
                  value={item}
                  onChange={onChangeContent}
                  placeholder="Type content here"
                />
              </CardBody>
              <CardFooter>
                <Button onPress={() => deleteContent(index)}>delete</Button>
              </CardFooter>
            </Card>
          ))}
          <Button onClick={moreContent}>Add content</Button>
        </div>
      </div>
    </div>
  )
}
