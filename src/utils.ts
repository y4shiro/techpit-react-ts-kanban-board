// ランダムな ID 12 桁を作成
export const randomID = () => {
  const alphabet =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';

  let id = '';
  for (let i = 12; i > 0; i--) {
    id += alphabet[(Math.random() * 64) | 0];
  }

  return id;
};
