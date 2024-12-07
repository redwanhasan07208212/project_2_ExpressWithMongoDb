import {
  TacademicSemesterCodeNameMapper,
  TcodeName,
  TMonths,
  TsemesterName,
} from './academicSemester.interface';

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const semesterName: TsemesterName[] = ['Autumn', 'Summer', 'Fall'];
export const codeName: TcodeName[] = ['01', '02', '03'];

export const academicSemesterCodeNameMapper: TacademicSemesterCodeNameMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
