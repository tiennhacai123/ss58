import axios from "axios";
import React from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function UpdateStudentById() {
  const updateStudent: Student = {
    id: Math.floor(Math.random() * 10000),
    student_name: "tiendz",
    email: "dz@gmail.com",
    address: "Thái Nguyên",
    phone: "3123123",
    status: true,
    created_at: new Date().toISOString().split("T")[0],
  };

  const updateStudentId = (id: number) => {
    axios
      .put(`http://localhost:3000/students/${id}`, updateStudent)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  };

  updateStudentId(3);
  return <div>UpdateStudentById</div>;
}
