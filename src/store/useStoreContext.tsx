/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Channel } from "../types/channel.types";

type StoreProps = {
  resolutionKey: string | undefined;
  setResolutionKey: (hd: string | undefined) => void;
  languageKey: string | undefined;
  setLanguageKey: (language: string | undefined) => void;
  categoryKey: string | undefined;
  setCategoryKey: (category: string | undefined) => void;
  sortKey: string | undefined;
  setSortKey: (sort: string | undefined) => void;
  isOpenModal: boolean;
  setIsOpenModal: (open: boolean) => void;
  searchKey: string | undefined;
  setSearchKey: (search: string | undefined) => void;
  initialData: Channel[];
  setInitialData: (channels: Channel[]) => void;
  filteredData: Channel[];
  setFilteredData: (channels: Channel[]) => void;
  resetAll: () => void;
};

const StoreContext = createContext<StoreProps>({
  resolutionKey: undefined,
  setResolutionKey: () => {},
  languageKey: undefined,
  setLanguageKey: () => {},
  categoryKey: undefined,
  setCategoryKey: () => {},
  sortKey: undefined,
  setSortKey: () => {},
  isOpenModal: false,
  setIsOpenModal: () => {},
  searchKey: undefined,
  setSearchKey: () => {},
  initialData: [],
  setInitialData: () => {},
  filteredData: [],
  setFilteredData: () => {},
  resetAll: () => {},
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [resolutionKey, setResolutionKey] =
    useState<string | undefined>(undefined);
  const [languageKey, setLanguageKey] = useState<string | undefined>(undefined);
  const [categoryKey, setCategoryKey] = useState<string | undefined>(undefined);
  const [sortKey, setSortKey] = useState<string | undefined>(undefined);
  const [searchKey, setSearchKey] = useState<string | undefined>(undefined);
  const [initialData, setInitialData] = useState<Channel[]>([]);
  const [filteredData, setFilteredData] = useState<Channel[]>([]);

  const resetAll = () => {
    setIsOpenModal(false);
    setSortKey(undefined);
    setCategoryKey(undefined);
    setLanguageKey(undefined);
    setResolutionKey(undefined);
  };
  const handleDataFiltering = () => {
    const newFilteredData = initialData
      .filter((resolution) => {
        if (resolutionKey) {
          if (resolutionKey === "HD") {
            return resolution.isHd;
          } else if (resolutionKey === "NON HD") {
            return !resolution.isHd;
          }
        } else {
          return resolution;
        }
      })
      .filter((language) => {
        return languageKey ? language.language === languageKey : language;
      })
      .filter((channel) => {
        return categoryKey ? channel.category === categoryKey : channel;
      })
      .filter((channel) => {
        if (searchKey) {
          return (
            channel.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 ||
            channel.stbNumber === searchKey
          );
        } else {
          return channel;
        }
      })
      .sort((a, b) => {
        if (sortKey) {
          if (sortKey === "Name") {
            const _first = a.title.toLowerCase();
            const _second = b.title.toLowerCase();

            return _first < _second ? -1 : _first > _second ? 1 : 0;
          } else if (sortKey === "Number") {
            return parseInt(a.stbNumber) - parseInt(b.stbNumber);
          }
        }
        return 0;
      });

    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? "hidden" : "auto";
  }, [isOpenModal]);

  useMemo(() => {
    handleDataFiltering();
  }, [
    searchKey,
    sortKey,
    initialData,
    categoryKey,
    languageKey,
    resolutionKey,
  ]);

  return (
    <StoreContext.Provider
      value={{
        resolutionKey,
        setResolutionKey,
        languageKey,
        setLanguageKey,
        categoryKey,
        setCategoryKey,
        sortKey,
        setSortKey,
        searchKey,
        setSearchKey,
        filteredData,
        setFilteredData,
        isOpenModal,
        setIsOpenModal,
        resetAll,
        initialData,
        setInitialData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
