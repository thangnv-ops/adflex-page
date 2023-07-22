export const getTagBackgroundColor = (tag: string) => {
  let color = '#EAEAEA'

  switch (tag) {
    case 'design':
      color = '#FCE7F6'
      break
    case 'research':
      color = '#D1FADF'
      break
    case 'presentation':
      color = '#CFF9FE'
      break
    case 'frameworks':
      color = '#FFE4E8'
      break
    case 'software Development':
      color = '#EBE9FE'
      break
    case 'tools':
      color = '#FEF0C7'
      break
    default:
      color = '#EAEAEA'
      break
  }
  return color
}
