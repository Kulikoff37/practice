import { API_GUEST } from "../../constants/routes";
import type { ISpace } from "../../types/user-space.types";

export const getUserSpace = (): Promise<ISpace> => fetch(API_GUEST).then(response => response.json());

