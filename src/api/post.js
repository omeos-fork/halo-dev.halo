import service from '@/utils/service'

const baseUrl = '/admin/api/posts'

const postApi = {}

postApi.listLatest = () => {
  return service({
    url: `${baseUrl}/latest`,
    method: 'get'
  })
}

postApi.query = params => {
  return service({
    url: baseUrl,
    params: params,
    method: 'get'
  })
}

postApi.postStatus = {
  PUBLISHED: {
    color: 'green',
    status: 'success',
    text: '已发布'
  },
  DRAFT: {
    color: 'yellow',
    status: 'warning',
    text: '草稿'
  },
  RECYCLE: {
    color: 'red',
    status: 'error',
    text: '回收站'
  }
}
export default postApi
