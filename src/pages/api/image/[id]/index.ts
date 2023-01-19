import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ImageResponse } from "../../../../types/image/ImageResponse";
import myAxios from "../../../../utils/myAxios";
import { urls } from "../../../../utils/urls";

const { CLIENT_ID } = process.env;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = String(req.query.id);

    const url = urls.others.imgurImageDetails(id);
    console.log({
      backendUrl: url,
    });

    const response = await myAxios.get<ImageResponse>(
      urls.others.imgurImageDetails(id),
      {
        headers: {
          Authorization: "Client-ID " + CLIENT_ID,
        },
      }
    );

    const details = response.data.data;

    res.status(200).json(details);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      res.status(e.response?.status || 500).json(e.response?.data);
    }
  }
};
