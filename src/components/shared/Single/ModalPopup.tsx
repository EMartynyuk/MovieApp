import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { IRequestTrailers } from "./Trailer";

interface IModalPopup {
  data: IRequestTrailers[];
  open: boolean;
  showModal: () => void;
}

export const ModalPopup = ({ open, data, showModal }: IModalPopup) => {
  const trailers = data.filter((video) => video.type === "Trailer");
  const officialTrailer = trailers.find((video) => video.official);
  let trailer;

  if (officialTrailer) {
    trailer = officialTrailer;
  } else {
    trailer = trailers[0];
  }

  return (
    <Dialog open={open} onOpenChange={showModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{trailer?.name}</DialogTitle>
        </DialogHeader>
        <iframe
          width="100%"
          height="315"
          src={"https://www.youtube.com/embed/" + trailer?.key}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};
