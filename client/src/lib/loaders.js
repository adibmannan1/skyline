import { defer } from "react-router-dom"
import apiRequest from "./apiRequest"

export const singlePageLoader = async({request, params}) => {
    const res = await apiRequest.get(`/posts/${params.id}`)
    return res.data
}
export const listsLoader = async({request, params}) => {
    const res = await apiRequest.get(`/posts`)
    return res.data
}
export const listPageLoader = ({request, params}) => {
    const query = request.url.split('?')[1]
    const postPromise = apiRequest.get(`/posts?${query}`)
    return defer({
        posts: postPromise,
      });
}