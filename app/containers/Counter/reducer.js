/*
 *
 * Counter reducer
 *
 */
import produce from 'immer';
import { INCREMENT, DECREMENT } from './constants';

export const initialState = {
  number: 0,
};

/* eslint-disable default-case, no-param-reassign */
const counterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.number += 1;
        break;
      case DECREMENT:
        draft.number -= 1;
    }
  });

export default counterReducer;
