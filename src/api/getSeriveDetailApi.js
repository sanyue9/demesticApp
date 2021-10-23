import request from '@/utils/request'
export const getCommentDataApi = function (serviceId, page, count) {
  return request.get('v1/rating/service', {
    params: {
      service_id: serviceId,
      page,
      count
    }
  })
}
