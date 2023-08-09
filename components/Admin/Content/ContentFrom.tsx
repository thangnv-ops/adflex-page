import { ContentReq, ContentReqError } from '@/backend/service/content-service/content-req'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react'
import { useEffect, useMemo, useState } from 'react'

import { DataDropDown } from './DataDropdown'

interface IContentForm {
  content: ContentReq
  setContent: (value: ContentReq) => void
  error?: ContentReqError
}

export const ContentForm = ({ content, setContent, error }: IContentForm) => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(['']))
  const [selectedComps, setSelectedComps] = useState<Set<string>>(new Set(['']))

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

  const selectedValue = useMemo(() => {
    const key = Array.from(selectedKeys)
    if (key[0].length === 0) return 'Select Screen'
    return DataDropDown.find((item) => item.route === key[0]).label
  }, [selectedKeys])

  useEffect(() => {
    const key = Array.from(selectedKeys)
    setContent({ ...content, route: key[0] })
  }, [selectedValue])

  useEffect(() => {
    const key = Array.from(selectedComps)
    setContent({ ...content, componentName: key[0] })
  }, [selectedComps])

  return (
    <div className=" w-full gap-4 flex flex-col gap-4">
      <Dropdown>
        <DropdownTrigger>
          <Button>{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys as any}
          aria-label="Static Actions"
        >
          {DataDropDown.map((item) => (
            <DropdownItem key={item.route}>{item.label}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      {content.route.length > 0 && (
        <Dropdown>
          <DropdownTrigger>
            <Button>{Array.from(selectedComps)[0] || 'Select component name'}</Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedComps}
            onSelectionChange={setSelectedComps as any}
            aria-label="Static Actions"
          >
            {DataDropDown.find((item) => item.label === selectedValue)?.components.map((item) => (
              <DropdownItem key={item}>{item}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
      <Input
        id="componentName"
        type="text"
        label="Component name tail"
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
