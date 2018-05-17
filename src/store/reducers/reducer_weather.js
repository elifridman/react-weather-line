import { FETCH_WEATHER } from '../constans/constans';

export default function(state = [], action){
  console.log('Action recived', action);
  switch (action.type) {
    case FETCH_WEATHER:
        return [action.payload.data, ...state];
      break;
    default:
      return state;
  }
  
}
