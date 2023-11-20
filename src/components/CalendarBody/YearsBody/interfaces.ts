export interface YearsBodyProps {
  year: number;
  currentDecadeYears: number[];
  handleSelectYear: (e: React.MouseEvent<HTMLElement>) => void;
}
