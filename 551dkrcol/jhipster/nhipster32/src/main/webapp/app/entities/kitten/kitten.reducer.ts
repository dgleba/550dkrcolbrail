import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IKitten, defaultValue } from 'app/shared/model/kitten.model';

export const ACTION_TYPES = {
  FETCH_KITTEN_LIST: 'kitten/FETCH_KITTEN_LIST',
  FETCH_KITTEN: 'kitten/FETCH_KITTEN',
  CREATE_KITTEN: 'kitten/CREATE_KITTEN',
  UPDATE_KITTEN: 'kitten/UPDATE_KITTEN',
  DELETE_KITTEN: 'kitten/DELETE_KITTEN',
  RESET: 'kitten/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IKitten>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type KittenState = Readonly<typeof initialState>;

// Reducer

export default (state: KittenState = initialState, action): KittenState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_KITTEN_LIST):
    case REQUEST(ACTION_TYPES.FETCH_KITTEN):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_KITTEN):
    case REQUEST(ACTION_TYPES.UPDATE_KITTEN):
    case REQUEST(ACTION_TYPES.DELETE_KITTEN):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_KITTEN_LIST):
    case FAILURE(ACTION_TYPES.FETCH_KITTEN):
    case FAILURE(ACTION_TYPES.CREATE_KITTEN):
    case FAILURE(ACTION_TYPES.UPDATE_KITTEN):
    case FAILURE(ACTION_TYPES.DELETE_KITTEN):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_KITTEN_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_KITTEN):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_KITTEN):
    case SUCCESS(ACTION_TYPES.UPDATE_KITTEN):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_KITTEN):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/kittens';

// Actions

export const getEntities: ICrudGetAllAction<IKitten> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_KITTEN_LIST,
    payload: axios.get<IKitten>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<IKitten> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_KITTEN,
    payload: axios.get<IKitten>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IKitten> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_KITTEN,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IKitten> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_KITTEN,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IKitten> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_KITTEN,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
