const NEXT_PUBLIC_BASE_URL = String(process.env.NEXT_PUBLIC_BASE_URL);

export const urls = {
  pages: {
    index: "/",
    imageDetails: (id: string) => `/image/${id}`,
  },
  api: {
    galleryImages: `${NEXT_PUBLIC_BASE_URL}/api/gallery-images`,
    imageDetails: (id: string) => `${NEXT_PUBLIC_BASE_URL}/api/image/${id}`,
  },
  others: {
    imgurGallery: (params?: {
      page?: string;
      section?: string;
      sort?: string;
      window?: string;
    }) => {
      const { section = "hot", sort = "viral", window = "day", page = "0" } =
        params || {};

      return `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}`;
    },
    imgurImageDetails: (id: string) => `https://api.imgur.com/3/image/${id}`,
  },
};
