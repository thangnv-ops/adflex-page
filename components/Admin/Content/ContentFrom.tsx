import { ContentReq, ContentReqError } from '@/backend/service/content-service/content-req'
import { Button, Card, CardBody, CardFooter, Input } from '@nextui-org/react'

interface IContentForm {
  content: ContentReq
  setContent: (value: ContentReq) => void
  error?: ContentReqError
}

export const ContentForm = ({ content, setContent, error }: IContentForm) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, [e.target.id]: e.target.value })
  }

  const validate = (field: string) => {
    return error && !!error[field] ? 'invalid' : 'valid'
  }

  const moreContent = () => {
    setContent({ ...content, content: [...content.content, ''] })
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({
      ...content,
      content: content.content.map((item, index) => {
        if (e.target.id === String(index)) {
          return e.target.value
        }
        return item
      }),
    })
  }

  const deleteContent = (thisIndex: number) => {
    setContent({
      ...content,
      content: content.content.filter((item, index) => index !== thisIndex),
    })
  }

  return (
    <div className=" w-full gap-4 flex flex-col gap-4">
      <Input
        id="route"
        type="text"
        label="Route"
        placeholder="Enter route"
        isRequired
        validationState={validate('route')}
        errorMessage={error?.route}
        value={content.route}
        onChange={onChange}
      />
      <Input
        id="componentName"
        type="text"
        label="Component name"
        placeholder="Enter component name"
        isRequired
        validationState={validate('componentName')}
        errorMessage={error?.componentName}
        value={content.componentName}
        onChange={onChange}
      />
      <div className="max-h-[200px] overflow-auto">
        <div className=" w-full gap-4 flex flex-col gap-4 p-4">
          {content.content.map((item, index) => (
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
