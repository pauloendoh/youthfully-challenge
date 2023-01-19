export interface ImageResponse {
  data: ImageDetails;
  success: boolean;
  status: number;
}

export interface ImageDetails {
  id: string;
  title?: any;
  description: string;
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
  nsfw: boolean;
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
  ad_config: Adconfig;
}

interface Adconfig {
  safeFlags: string[];
  highRiskFlags: any[];
  unsafeFlags: string[];
  wallUnsafeFlags: any[];
  showsAds: boolean;
  showAdLevel: number;
  safe_flags: string[];
  high_risk_flags: any[];
  unsafe_flags: string[];
  wall_unsafe_flags: any[];
  show_ads: boolean;
  show_ad_level: number;
}
