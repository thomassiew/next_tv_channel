import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChannelDetails } from "../types/channel.types";

type StoreProps = {
  sortKey: string | undefined;
  setSortKey: (search: string | undefined) => void;
  isOpenModal: boolean;
  setIsOpenModal: (open: boolean) => void;
  searchKey: string | undefined;
  setSearchKey: (search: string | undefined) => void;
  initialData: ChannelDetails[];
  setInitialData: (channels: ChannelDetails[]) => void;
  filteredData: ChannelDetails[];
  setFilteredData: (channels: ChannelDetails[]) => void;
  resetAll: () => void;
};

const StoreContext = createContext<StoreProps>({
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
  const [sortKey, setSortKey] = useState<string | undefined>(undefined);
  const [searchKey, setSearchKey] = useState<string | undefined>(undefined);
  const [initialData, setInitialData] = useState<ChannelDetails[]>([]);
  const [filteredData, setFilteredData] = useState<ChannelDetails[]>([]);

  const resetAll = () => {
    setIsOpenModal(false);
    setSortKey(undefined);
  };
  const handleDataFiltering = () => {
    const newFilteredData = initialData
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

  useEffect(() => {
    handleDataFiltering();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey, sortKey, initialData]);

  return (
    <StoreContext.Provider
      value={{
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
