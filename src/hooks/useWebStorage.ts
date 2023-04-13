import { STORAGE_KIND } from "@src/@constants";
import { StorageKind } from "@src/@types/utils";

interface Props {
  key: string;
  kind: StorageKind;
}

interface UseWebStorageResult<T> {
  getItem: () => T;
  setItem: (item: T) => void;
}

function useWebStorage<T>({ key, kind }: Props): UseWebStorageResult<T> {
  const storage = kind === STORAGE_KIND.LOCAL ? localStorage : sessionStorage;

  const getItem = (): T => {
    return JSON.parse(storage.getItem(key) ?? "[]");
  };

  const setItem = (item: T): void => {
    storage.setItem(key, JSON.stringify(item));
  };

  return { getItem, setItem };
}

export default useWebStorage;
