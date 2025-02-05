import { FAVOURITES, ALL } from "utils/constans";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TPostsFavourtiesFilterProps = {
  favouritesParam: string | null;
  handleTabClick: (value: string) => void;
}

export const PostsFavourtiesFilter = ({
  favouritesParam,
  handleTabClick
}: TPostsFavourtiesFilterProps) => {
  return (
    <Tabs defaultValue={favouritesParam ? FAVOURITES : ALL} className="w-auto order-2 md:order-1">
      <TabsList>
        <TabsTrigger
          value={ALL}
          onClick={() => handleTabClick(ALL)}
          defaultTab={favouritesParam ? false : true}
          className="mr-[2rem]"
        >
          {ALL.toUpperCase()}
        </TabsTrigger>
        <span className="text-sm font-bold text-[#8E2F3F] mr-3">/</span>
        <TabsTrigger
          value={FAVOURITES}
          onClick={() => handleTabClick(FAVOURITES)}
          defaultTab={favouritesParam ? true : false}
        >
          {FAVOURITES.toUpperCase()}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
