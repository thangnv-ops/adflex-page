import { CommonListResult, CommonResponse, CommonService } from 'common-abstract-fares-system'
import { LoginReq, LoginReqError } from './login-req'
import { UserReq, UserReqError } from './user-req'
import {
  addNewUserFunction,
  getListUsersFunc,
  loginFunction,
  updateUserFunction,
  verifyTokenFunction,
} from './user-service-function'

import { User } from '@/backend/repository/user-repository/user-entity'
import { UserRepository } from '@/backend/repository/user-repository/user-repository'
import { NextApiRequest } from 'next'
import { LoginRes } from './login-res'
import { UserRes } from './user-res'

export class UserService extends CommonService<UserRepository> {
  constructor() {
    super(new UserRepository())
  }

  public async getListUsers(
    req: NextApiRequest
  ): Promise<CommonResponse<CommonListResult<UserRes> | string>> {
    return await getListUsersFunc(
      req,
      this.repository,
      this.getPageAndSize,
      this.generatePipelineAggregate(req.query, new User())
    )
  }

  public async addNewUser(req: NextApiRequest): Promise<CommonResponse<UserReqError | string>> {
    return await addNewUserFunction(req.body, this.repository, req.query)
  }

  public async updateUser(
    req: UserReq,
    id: string
  ): Promise<CommonResponse<UserReqError | string>> {
    return await updateUserFunction(req, id, this.repository)
  }

  public async verifyInternalUserToken(userToken: string): Promise<CommonResponse<User | string>> {
    return await verifyTokenFunction(userToken, this.repository)
  }

  public async login(
    loginReq: LoginReq
  ): Promise<CommonResponse<LoginReqError | LoginRes | string>> {
    return await loginFunction(loginReq, this.repository)
  }
}
