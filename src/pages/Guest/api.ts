import { API_GUEST } from "../../constants/routes";
import type { ISpace } from "../../types/user-space.types";

export const getScope = (): Promise<ISpace> => fetch(API_GUEST).then(response => response.json());

export const getScopeMock = (): Promise<ISpace> => fetch(API_GUEST).then(response => response.json());

