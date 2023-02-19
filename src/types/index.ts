export type PositionType = {
  userId: number;
  position: number;
  color: string;
}[];

export type FigureClickParamsType = {
  userId: number;
  position: number;
  figure?: string[];
};

export type FigureClickType = ({
  userId,
  position,
  figure,
}: FigureClickParamsType) => void;

export type UserColorType = {
  userId: number;
  color: string;
};

export type MessageType = {
  userId?: number;
  username?: string;
  message?: string;
  info?: {
    figure: string[];
    position: number;
  };
};

export type MessageInfoType = {
  userId: number;
  figure: string[];
  position: number;
};

export type onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => void;
