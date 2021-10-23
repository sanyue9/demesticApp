import request from '@/utils/request'

// 获取分类
export const getCategoryListApi = function () {
  return request.get('v1/category')
}

// 获取token
export const getTokenApi = function () {
  return request.post(
    'v1/token',
    {
      i_code: 'A92FBF6C407D8985',
      order_no: '7001010800001624'
    }
  )
}

// 获取所有已发布的服务
export const getServiceApi = function (page, count) {
  return request.get('v1/service/list', {
    params: {
      page,
      count
    }
  })
}

// 选择在提供或者正在找
export const getSeletTypeApi = function (type, page, count) {
  return request.get('v1/service/list', {
    params: {
      type,
      page,
      count
    }
  })
}

// 选择分类
export const getCategoryTypeApi = function (categoryId, type, page, count) {
  return request.get('v1/service/list', {
    params: {
      category_id: categoryId,
      type,
      page,
      count
    }
  })
}
