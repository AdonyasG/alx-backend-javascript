import getListStudentIds from './1-get_list_student_ids';
import getListStudents from './0-get_list_students';

export default function getStudentIdsSum() {
  const array = getListStudentIds(getListStudents());
  const sum = array.reduce((accumulator, number) => accumulator + number);
  return sum;
}
