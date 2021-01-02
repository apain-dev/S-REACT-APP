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
