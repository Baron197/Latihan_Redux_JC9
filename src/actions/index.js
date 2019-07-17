import { ubahTextKeren } from './types';

export const ubahStateTextKeren = (valukeren) => {
    return {
        type: ubahTextKeren,
        payload: valukeren
    }
}