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

// 受け取ったリストをリスト順序情報に従ってソートし、新たなリストを返す
export const sortBy = <
  E extends { id: Exclude<V, null> },
  V extends string | null,
>(
  list: E[],
  order: Record<string, V>,
  head: Exclude<V, null>,
) => {
  const map = list.reduce((m, e) => m.set(e.id, e), new Map<V, E>());

  const sorted: typeof list = [];

  let id = order[head];
  for (let i = list.length; i > 0; i--) {
    if (!id || id === head) break;

    const e = map.get(id);
    if (e) sorted.push(e);

    id = order[id as Exclude<V, null>];
  }

  return sorted;
};

// リストの順序情報を並べ替える PATCH リクエストのための情報を生成して返す
export const reorderPatch = <V extends string | null>(
  order: Record<string, V>,
  id: Exclude<V, null>,
  toID: V = null as V,
) => {
  const patch: Record<string, V> = {};
  if (id === toID || order[id] === toID) {
    return patch;
  }

  const [deleteKey] =
    Object.entries(order).find(([, v]) => v && v === id) || [];
  if (deleteKey) {
    patch[deleteKey] = order[id];
  }

  const [insertKey] =
    Object.entries(order).find(([, v]) => v && v === toID) || [];
  if (insertKey) {
    patch[insertKey] = id as V;
  }

  patch[id] = toID as V;

  return patch;
};
