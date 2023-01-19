export interface GalleryResponse {
  data: IGalleryResponseItem[];
  success: boolean;
  status: number;
}

export interface IGalleryResponseItem {
  id: string;
  title: string;
  description?: string;
  datetime: number;
  cover?: string;
  cover_width?: number;
  cover_height?: number;
  account_url: string;
  account_id: number;
  privacy?: string;
  layout?: string;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  vote?: any;
  favorite: boolean;
  nsfw: boolean;
  section: string;
  comment_count: number;
  favorite_count: number;
  topic?: any;
  topic_id?: number;
  images_count?: number;
  in_gallery: boolean;
  is_ad: boolean;
  tags: (Tag | Tags2 | Tags3)[];
  ad_type: number;
  ad_url: string;
  in_most_viral: boolean;
  include_album_ads?: boolean;
  images?: IGaleryImage[];
  ad_config: Adconfig;
  type?: string;
  animated?: boolean;
  width?: number;
  height?: number;
  size?: number;
  bandwidth?: number;
  has_sound?: boolean;
  edited?: number;
  mp4?: string;
  gifv?: string;
  hls?: string;
  mp4_size?: number;
  looping?: boolean;
  processing?: Processing;
}

interface Adconfig {
  safeFlags: string[];
  highRiskFlags: any[];
  unsafeFlags: string[];
  wallUnsafeFlags: string[];
  showsAds: boolean;
  showAdLevel: number;
  safe_flags: string[];
  high_risk_flags: any[];
  unsafe_flags: string[];
  wall_unsafe_flags: string[];
  show_ads: boolean;
  show_ad_level: number;
}

export interface IGaleryImage {
  id: string;
  title?: any;
  description?: null | string | string;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote?: any;
  favorite: boolean;
  nsfw?: any;
  section?: any;
  account_url?: any;
  account_id?: any;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  link: string;
  comment_count?: any;
  favorite_count?: any;
  ups?: any;
  downs?: any;
  points?: any;
  score?: any;
  mp4_size?: number;
  mp4?: string;
  gifv?: string;
  hls?: string;
  processing?: Processing;
}

interface Processing {
  status: string;
}

interface Tags3 {
  name: string;
  display_name: string;
  followers: number;
  total_items: number;
  following: boolean;
  is_whitelisted: boolean;
  background_hash: string;
  thumbnail_hash?: any;
  accent?: string;
  background_is_animated: boolean;
  thumbnail_is_animated: boolean;
  is_promoted: boolean;
  description: string;
  logo_hash?: any;
  logo_destination_url?: any;
  description_annotations: Descriptionannotations;
}

interface Tags2 {
  name: string;
  display_name: string;
  followers: number;
  total_items: number;
  following: boolean;
  is_whitelisted: boolean;
  background_hash: string;
  thumbnail_hash?: string;
  accent: string;
  background_is_animated: boolean;
  thumbnail_is_animated: boolean;
  is_promoted: boolean;
  description: string;
  logo_hash?: any;
  logo_destination_url?: any;
  description_annotations: Descriptionannotations;
}

interface Tag {
  name: string;
  display_name: string;
  followers: number;
  total_items: number;
  following: boolean;
  is_whitelisted: boolean;
  background_hash: string;
  thumbnail_hash?: any;
  accent: string;
  background_is_animated: boolean;
  thumbnail_is_animated: boolean;
  is_promoted: boolean;
  description: string;
  logo_hash?: any;
  logo_destination_url?: any;
  description_annotations: Descriptionannotations;
}

interface Descriptionannotations {}
