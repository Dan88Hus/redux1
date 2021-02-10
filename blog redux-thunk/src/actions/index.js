import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch, getState) => { 
  await dispatch(fetchPost());
  // getstate i map yapabilmek icin lodash kullandik
  const userIds= _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(id=> dispatch(fetchUser(id)));

  
}


export const fetchPost = () =>
  // dispatch reducer yaparak icerigi degistirmemizi saglar
  // getState ise giant state ti okumamizi saglar
  // getState kullanmadigimiz icin silebiliriz
async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS', payload: response.data
    })

  } 
export const fetchUser = (id) =>  async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch ({
    type: 'FETCH_USER', payload: response.data
  })
}

  



// this technique from lodash can be used thats why its commented
// lodash is basically for caching to prevent refetching same userid


// export const fetchUser = (id) =>  dispatch => {
//   _fetchUser(id, dispatch)
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch ({
//     type: 'FETCH_USER', payload: response.data
//   })
// })
 