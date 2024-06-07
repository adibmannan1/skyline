import { defer } from "react-router-dom"
import apiRequest from "./apiRequest"

export const singlePageLoader = async({request, params}) => {
    const res = await apiRequest.get(`/posts/${params.id}`)
    return res.data
}
export const profilePageLoader = async({request, params}) => {
    const postPromise = apiRequest.get(`/users/profilePosts`)
    return defer({
        posts: postPromise,
    });
}
export const listPageLoader = ({request, params}) => {
    const query = request.url.split('?')[1]
    const postPromise = apiRequest.get(`/posts?${query}`)
    return defer({
        posts: postPromise,
      });
}