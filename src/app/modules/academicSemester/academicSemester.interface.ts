export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TsemesterName = 'Autumn' | 'Summer' | 'Fall';
export type TcodeName = '01' | '02' | '03';
export type TAcademicSemester = {
  name: TsemesterName;
  code: TcodeName;
  date: Date;
  startMonth: TMonths;
  endMonth: TMonths;
};
