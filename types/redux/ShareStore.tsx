import { UserRes } from '@/backend/service/user-service/user-res'

export interface ShareStoreTypes {
  loading: number
  breakPoint: number
  language: {
    [key: string]: string
  }
  userInfo: UserRes
}
