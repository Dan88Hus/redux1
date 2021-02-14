import _ from 'lodash';
import { CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM, 
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
      //mapkeys turn an big objectsm ... operator makes new object from id parameter
      
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
      return _.omit(state, action.payload);
      //omit already reaturns a new object so no need to create new object as above 
    default:
      return state
  }
}


// db.json veya api dan bize datalar array[] olarak geliyor
//{} object e donusturmek icin lodashten mapKeys(streams, 'id') yi kullanacaz
