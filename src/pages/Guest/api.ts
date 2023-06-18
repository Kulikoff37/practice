import { spaceMock } from "../../mocks/space.mock"
import type { ISpace } from "../../types/user-space.types";

export const getUserSpace = (): Promise<ISpace> => new Promise(resolve => resolve(spaceMock));
