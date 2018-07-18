import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'

import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  time: 5000 //请求超时时间
})

