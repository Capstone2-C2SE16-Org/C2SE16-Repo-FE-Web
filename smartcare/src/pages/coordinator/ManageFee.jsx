import React from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import Table from "../../components/atoms/table";

import { Button, Input } from "../../components/atoms";
import withLayout from "../../components/layouts";
import { colummns } from "./constants";

function ManageFee() {
  const datas = [
    {
      id: "1",
      name: "Hoàng Giang Ân",
      amount: "1500000 VNĐ",
      status: "Chưa",
      date: "01-01-2022",
      email: "hoanggiangan@gmail.com",
    },
    {
      id: "2",
      name: "Trình Trình Mẫn",
      amount: "1500000 VNĐ",
      status: "Chưa",
      date: "01-01-2022",
      email: "trinhtrinhman@gmail.com",
    },
    {
      id: "3",
      name: "Khâu Sử Trang",
      amount: "1200000 VNĐ",
      status: "Xong",
      date: "01-01-2022",
      email: "khausutrang@gmail.com",
    },
    {
      id: "4",
      name: "Biện Vương Thuần",
      amount: "1500000 VNĐ",
      status: "Chưa",
      date: "01-01-2022",
      email: "bienvuongthuan@gmail.com",
    },
    {
      id: "5",
      name: "Lý Bạc Đạo",
      amount: "1500000 VNĐ",
      status: "Chưa",
      date: "01-01-2022",
      email: "lybacdao@gmail.com",
    },
    {
      id: "6",
      name: "Ấu Cự Giác",
      amount: "1200000 VNĐ",
      status: "Xong",
      date: "01-01-2022",
      email: "aucugiac@gmail.com",
    },
    {
      id: "7",
      name: "Ma Ca Hạnh",
      amount: "1500000 VNĐ",
      status: "Chưa",
      date: "01-01-2022",
      email: "macahanh@gmail.com",
    },
    {
      id: "8",
      name: "Lương Lư Yến",
      amount: "1500000 VNĐ",
      status: "Chưa",
      date: "01-01-2022",
      email: "luongluyen@gmail.com",
    },
    {
      id: "9",
      name: "Kiều Phạm Ninh",
      amount: "1200000 VNĐ",
      status: "Xong",
      date: "01-01-2022",
      email: "kieuphamninh@gmail.com",
    },
    {
      id: "10",
      name: "Nhâm Phí Phát",
      amount: "1200000 VNĐ",
      status: "Xong",
      date: "01-01-2022",
      email: "nhamphiphat@gmail.com",
    },
  ];
  const columnAction = [
    {
      icon: IoPencil,
      classIc: "cursor-pointer text-[#05b64c] inline-block",
      handleClick: () => {
      },
    },
    {
      icon: IoTrashOutline,
      classIc: "cursor-pointer text-[#ff5050] inline-block",
      handleClick: () => {
        console.log("abcd");
      },
    },
  ];
  const HeaderTable = () => {
    return (
      <div className="m-[20px]">
        <div className="flex items-center justify-between">
          <Input placeholder={"Nhập tên học sinh"} classInput={"w-[300px]"} />
          <div className="flex items-center">
            <Input
              type={"date"}
              pattern="\d{1,2}/\d{1,2}/\d{4}"
              placeholder="dd/mm/yyyy"
            />
            <Button
              classButton={"h-[40px] mx-[10px]"}
              style={{ "margin-top": 0 }}
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
        <IoTrashOutline
          className={`cursor-pointer text-[#ff5050] block ml-auto mt-[16px] mr-[10px]`}
          onClick={()=>{}}
        />
      </div>
    );
  };
  return (
      <Table
        styleTable={{ width: "100%" }}
        checkbox={true}
        colummns={colummns}
        datas={datas}
        columnAction={columnAction}
        search={<HeaderTable />}
        renderCssCustom={(status) => {
          return `cursor-pointer p-[10px] rounded-[16px] ${
            status == "Xong" ? "bg-paidColor" : "bg-dueColor"
          }`;
        }}
      />
  );
}

export default withLayout(ManageFee, "Quản lý học phí", 2, () => {});

