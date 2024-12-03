export type Tuser = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'faculty' | 'student';
  status: 'inprogess' | 'blocked';
  isDeleted: boolean;
};
