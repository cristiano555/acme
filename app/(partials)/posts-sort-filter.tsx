import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { NEWEST, OLDEST } from 'utils/constans';

const DEFAULT_OPTIONS = [
  { label: 'Najnowsze wpisy', value: NEWEST },
  { label: 'Najstarsze wpisy', value: OLDEST }
];

type TSelectOption = { label: string; value: string };

type TPostsSortFilterProps = {
  label?: string;
  value: string;
  onChange: (typeOfSorting: string) => void;
  options?: TSelectOption[];
};

export function PostsSortFilter({
  label = 'pokaż od:',
  value,
  onChange,
  options = DEFAULT_OPTIONS
}: TPostsSortFilterProps) {
  return (
    <div className="flex items-center gap-11 max-w-3xl order-1 md:order-2 ">
      <div className="text-xs font-regular text-dark-500">{label}</div>
      <div className="min-w-[12rem] md:min-w-[18rem]">
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-full border-0 border-b border-border rounded-none focus:ring-0 shadow-none [&>svg]:hidden pl-0 justify-start text-dark-700 text-xs pb-1.5 font-sans font-bold">
            <SelectValue
              placeholder={
                options.find((opt) => opt.value === value)?.label ||
                'Wybierz opcję'
              }
              className="text-left"
            />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
