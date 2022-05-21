import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChannelDetails } from "../../types/channel.types";

type StoreProps = {
  searchKey: string | undefined;
  setSearchKey: (search: string | undefined) => void;
  filteredData: ChannelDetails[];
  setFilteredData: (channels: ChannelDetails[]) => void;
};

const StoreContext = createContext<StoreProps>({
  searchKey: undefined,
  setSearchKey: () => {},
  filteredData: [],
  setFilteredData: () => {},
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [searchKey, setSearchKey] = useState<string | undefined>(undefined);
  const [filteredData, setFilteredData] = useState<ChannelDetails[]>([]);

  const handleDataFiltering = (searchKey: string | undefined) => {
    if (searchKey) {
      const newFilteredData = filteredData.filter(
        (channel) =>
          channel.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 ||
          channel.stbNumber === searchKey
      );

      setFilteredData(newFilteredData);
    }
  };

  useEffect(() => {
    handleDataFiltering(searchKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);
  return (
    <StoreContext.Provider
      value={{ searchKey, setSearchKey, filteredData, setFilteredData }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
