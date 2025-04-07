export const getStudentId = (email) => {
    const studentId = email.split("@")[0];
    return studentId;
}