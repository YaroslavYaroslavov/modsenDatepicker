export interface MonthCellProps {
  monthName: string;
  id: string;
  handleSelectMonth: (e: React.MouseEvent<HTMLInputElement>) => void;
}
