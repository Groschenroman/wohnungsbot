import type { configurationStateType } from '../reducers/configuration';
import type { Action } from '../reducers/types';
import {
  NEXT_STAGE,
  PREVIOUS_STAGE,
  RESET_CONFIGURATION,
  SET_CONFIGURATION,
  TOGGLE_POSTCODE
} from '../constants/actionTypes';

export function setConfiguration(
  configuration: configurationStateType
): Action {
  return {
    type: SET_CONFIGURATION,
    payload: { configuration }
  };
}

export function resetConfiguration(): Action {
  return {
    type: RESET_CONFIGURATION,
    payload: null,
    meta: { configuration: true }
  };
}

export function nextStage(): Action {
  return {
    type: NEXT_STAGE,
    payload: null,
    meta: { configuration: true }
  };
}

export function previousStage(): Action {
  return {
    type: PREVIOUS_STAGE,
    payload: null,
    meta: { configuration: true }
  };
}
export function togglePostcode(postcode: string): Action {
  return {
    type: TOGGLE_POSTCODE,
    payload: { postcode },
    meta: { configuration: true }
  };
}