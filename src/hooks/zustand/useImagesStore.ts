import { create } from "zustand";
import { IGaleryImage } from "../../types/gallery/GalleryResponse";

// I used this to globally store the images from the gallery,
// so they don't disappear when I come back from the image details page
interface Store {
  images: IGaleryImage[];
  setImages: (images: IGaleryImage[]) => void;
}

export const useImagesStore = create<Store>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
}));
