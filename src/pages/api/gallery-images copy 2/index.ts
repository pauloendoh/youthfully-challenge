import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import {
  GalleryResponse,
  IGaleryImage,
} from "../../../types/gallery/GalleryResponse";
import { urls } from "../../../utils/urls";

const { CLIENT_ID } = process.env;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const url = urls.others.imgurGallery({
    page: String(query.page),
    section: String(query.section),
    sort: String(query.sort),
    window: String(query.window),
  });

  console.log({
    url,
  });

  const response = await axios.get<GalleryResponse>(url, {
    headers: {
      Authorization: "Client-ID " + CLIENT_ID,
    },
  });

  const galleriesWithImages = response.data.data.filter(
    (item) => item.images && item.images.length > 0
  );

  const allImages = galleriesWithImages.reduce<IGaleryImage[]>(
    (total, item) => [...total, ...(item?.images || [])],
    []
  );

  const onlyImages = allImages.filter((image) => image.type.includes("image"));

  res.status(200).json(onlyImages);
};
