import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface IAsideToggle {
  asideShow: boolean;
  handlerAsideShow: () => void;
}

export const AsideToggle = ({ asideShow, handlerAsideShow }: IAsideToggle) => {
  return (
    <button className="aside__toggle" onClick={handlerAsideShow}>
      {asideShow ? <PanelLeftClose /> : <PanelLeftOpen />}
    </button>
  );
};
