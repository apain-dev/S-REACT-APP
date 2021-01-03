export interface AuthUser {
  spotify: boolean;
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

export interface Track {
  // eslint-disable-next-line camelcase
  added_at: string;
  // eslint-disable-next-line camelcase
  added_by: Addedby;
  // eslint-disable-next-line camelcase
  is_local: boolean;
  // eslint-disable-next-line camelcase
  primary_color?: any;
  track: TrackDetails;
  // eslint-disable-next-line camelcase
  video_thumbnail: Videothumbnail;
}

interface Videothumbnail {
  url?: any;
}

interface TrackDetails {
  album: Album;
  artists: Artist[];
  // eslint-disable-next-line camelcase
  available_markets: string[];
  // eslint-disable-next-line camelcase
  disc_number: number;
  // eslint-disable-next-line camelcase
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  // eslint-disable-next-line camelcase
  external_ids: Externalids;
  // eslint-disable-next-line camelcase
  external_urls: Externalurls;
  href: string;
  id: string;
  // eslint-disable-next-line camelcase
  is_local: boolean;
  name: string;
  popularity: number;
  // eslint-disable-next-line camelcase
  preview_url: string;
  track: boolean;
  // eslint-disable-next-line camelcase
  track_number: number;
  type: string;
  uri: string;
}

interface Externalids {
  isrc: string;
}

interface Album {
  // eslint-disable-next-line camelcase
  album_type: string;
  artists: Artist[];
  // eslint-disable-next-line camelcase
  available_markets: string[];
  // eslint-disable-next-line camelcase
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  // eslint-disable-next-line camelcase
  release_date: string;
  // eslint-disable-next-line camelcase
  release_date_precision: string;
  // eslint-disable-next-line camelcase
  total_tracks: number;
  type: string;
  uri: string;
}

interface Image {
  // @ts-ignore
  height: number;
  url: string;
  // @ts-ignore
  width: number;
}

interface Artist {
  // eslint-disable-next-line camelcase
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Addedby {
  // eslint-disable-next-line camelcase
  external_urls: Externalurls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Externalurls {
  spotify: string;
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
