import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import { courses } from "./Database";
import { Z_BEST_SPEED } from "zlib";
function Kanbas() {
  const [courseList, setCourseList] = useState<any[]>(courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourseList([...courseList, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourseList(courseList.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourseList(
      courseList.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courseList}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courseList} />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
