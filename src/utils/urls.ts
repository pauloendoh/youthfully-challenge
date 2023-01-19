export const urls = {
  pages: {
    index: "/",
    imageDetails: (id: string) => `/image/${id}`,
  },
  api: {
    galleryImages: `/api/gallery-images`,
    imageDetails: (id: string) => `/api/image/${id}`,
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
