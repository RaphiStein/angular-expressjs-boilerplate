import { ISiteUser } from "./types/types";

export enum ETags {
  PUBLIC = 'public', TAG1 = 'tag1', TAG2 = 'tag2', TAG3 = 'tag3'
}
export const users: { [key: string]: ISiteUser} = {
  joe: {
    tags: [ ]
  },
  mike: {
    tags: [ ETags.TAG1, ETags.TAG2, ETags.TAG3 ]
  }
}
