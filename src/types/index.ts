export interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

// eslint-disable-next-line no-shadow
export enum ModalEvent {
  // eslint-disable-next-line no-unused-vars
  MODAL_CONFIRM_CLICKED,
  // eslint-disable-next-line no-unused-vars
  MODAL_CANCEL_CLICKED,
  // eslint-disable-next-line no-unused-vars
  MODAL_ASK_CONFIRMATION,
}
export interface Playlist {
  collaborative: boolean;
  description: string;
  // eslint-disable-next-line camelcase
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  // eslint-disable-next-line camelcase
  primary_color?: any;
  public: boolean;
  // eslint-disable-next-line camelcase
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface Owner {
  // eslint-disable-next-line camelcase
  display_name: string;
  // eslint-disable-next-line camelcase
  external_urls: Externalurls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Image {
  height?: number;
  url: string;
  width?: number;
}

interface Externalurls {
  spotify: string;
}
