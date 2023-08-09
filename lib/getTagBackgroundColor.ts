export const getTagBackgroundColor = (tag: string) => {
  let color = '#EAEAEA'

  switch (tag) {
    case 'Thiết kế':
      color = '#FCE7F6'
      break
    case 'Nghiên cứu':
      color = '#D1FADF'
      break
    case 'presentation':
      color = '#CFF9FE'
      break
    case 'Frameworks':
      color = '#FFE4E8'
      break
    case 'Công nghệ':
      color = '#EBE9FE'
      break
    case 'Công cụ':
      color = '#FEF0C7'
      break
    default:
      color = '#EAEAEA'
      break
  }
  return color
}
