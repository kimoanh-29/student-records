import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MonHoc from "../asset/images/subject.png"
import LopHoc from "../asset/images/class.png"
import QLDiem from "../asset/images/score.png"
import QLUser from "../asset/images/account.svg"
import Degree from "../asset/images/degree.png"
import Exam from "../asset/images/result01.png"
import { AuthContext } from "../context/AuthContext.jsx"

const cardLinks = [
  {
    name: "Tài khoản",
    href: "/user",
    image: QLUser,
  },
  {
    name: "Học phần",
    href: "/subject",
    image: MonHoc,
  },
  {
    name: "Lớp học phần",
    href: "/course",
    image: LopHoc,
  },
  {
    name: "Điểm học phần",
    href: "/result",
    image: QLDiem,
  },
  {
    name: "Kết quả học tập",
    href: "/student",
    image: Exam,
  },
  {
    name: "Bằng cấp",
    href: "/degree",
    image: Degree,
  },
];

const Home = () => {

  const { user } = useContext(AuthContext)
  console.log("user", user);
  return (
    <>
      <section className=" xl:px-0 container pt-2 pb-0">
        <div className="max-w-[1170px] mx-auto rounded  border-2 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 p-2 gap-5">
            {/* =============image box============= */}
            <div className="rounded-lg border-2 border-black items-center" style={{ height: '300px' }}>
              <h1 className="infor-user justify-center mb-3">Thông tin</h1>
              {/* <div> */}
              <div className="grid grid-cols-2 gap-2 p-5" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                <div className='font-bold'>Mã số: </div>
                <div>{user.adminMS}</div>

                <div className='font-bold' >Họ tên: </div>
                <div>{user.name}</div>

                <div className='font-bold'>SDT: </div>
                <div>
                  {user.sdt}
                </div>

                <div className='font-bold'>Email: </div>
                <div>{user.email}</div>
              </div>
              {/* </div> */}
            </div>
            <div className="col-span-2 rounded-lg  border-2 border-black flex justify-center">
              <div className="grid grid-cols-3 gap-5 px-5 border-2">
                {cardLinks.map((item, index) => {
                  return (
                    <div className="rounded overflow-hidden shadow-lg card-item" key={index}>
                      <Link to={item.href} ><img src={item.image} alt="" className='p-10' /></Link>
                      <div className="px-6 py-4  card-home">
                        {/* <button className="font-bold text-xl mb-2 text-center">Quản lý điểm</button> */}
                        <Link to={item.href} className="font-bold text-xl mb-2 text-[1rem]" >{item.name}</Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home