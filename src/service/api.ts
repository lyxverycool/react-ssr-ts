import { provide, async } from 'midway'
import { IApiService, IApiResult } from '../interface'
import fetch from './fetch'

const mockData = [
  {
    id: '1',
    href: 'Racket v7.3 Release Notes'
  },
  {
    id: '2',
    href: 'Free Dropbox Accounts Now Only Sync to Three Devices'
  },
  {
    id: '3',
    href: 'Voynich Manuscript Decoded by Bristol Academic'
  },
  {
    id: '4',
    href: 'Burger King to Deliver Whoppers to LA Drivers Stuck in Traffic'
  },
  {
    id: '5',
    href: 'How much do YouTube celebrities charge to advertise your product? '
  }
]


@provide('ApiService')
export class ApiService implements IApiService {

  async index(): Promise<IApiResult> {
    const res = await fetch({ url: 'http://localhost:3000/api/list/queryListAll' })
    let data = mockData
    if (res && res.data) {
      data = res.data
    }
    return {
      news: data
    }
  }
}
