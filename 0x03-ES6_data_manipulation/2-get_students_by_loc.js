import getListStudents from './0-get_list_students';

export default function getStudentsByLocation() {
  const array = getListStudents();
  const employee = array.filter((employee) => employee.location.indexOf('San') > -1);
  return employee;
}
