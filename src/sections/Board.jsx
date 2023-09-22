import Card from "@/components/Card";
import { GoCommentDiscussion } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { TodoListInfo, ProgressInfo, Done } from "@/components/Menus";

import Image from "next/image";
import "@/components/style.css";
const style = {
  wrapper: `flex w-full h-full bg-[#0D0B21] flex-col  mt-5   w-full`,
  info: `bg-[#15132B] rounded-lg  justify-between gap-6 flex flex-col py-6 px-4 w-full `,
  leftInfo: `flex flex-col w-full gap-3  h-full justify-between`,

  rightInfo: `flex flex-col gap-3 justify-between items-end w-full h-full hidden lg:flex`,
  progress: `flex gap-2`,
  tables: `flex flex-1 gap-10 mt-2 w-full pb-[30px]`,
  columns: `flex flex-col gap-3 max-w-[284px] min-w-[284px] w-full  `,
  head: `flex items-center py-2 px-3 justify-between`,
};

function Board() {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <div className="flex gap-2 w-full ">
          <Image
            src="/btnback.svg"
            alt="back"
            className="w-8 h-8"
            width={300}
            height={300}
          />
          <div className={style.leftInfo}>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">School November Tasks</p>
              <p className="text-xs">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
          </div>
          <div className={style.rightInfo}>
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Centered Martial Arts</p>
                <p className="text-xs">Sunnyvale,Ca</p>
              </div>
              <span className="p-1 rounded-xl bg-[white]">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className="w-9 h-9  "
                  width={300}
                  height={300}
                />
              </span>
            </div>
          </div>
          <Image
            src="/threedot.svg"
            alt="dot"
            className="w-6 h-6 "
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center jsutify-between gap-4 lg:gap-0 pl-[25px] lg:py-0 lg:px-30  flex-wrap">
          <div className="flex gap-[15px]  flex-wrap">
            <Image
              src="/peopleCircle.svg"
              alt="circle"
              className="w-[8rem] hidden lg:flex"
              width={300}
              height={300}
            />
            <button className="py-2 px-3 rounded-xl focus:border-white-500 focus:border-2  bg-[#8338ec] text-white flex items-center gap-2">
              <i className="text-white text-xs lg:text-base">
                <BsPeopleFill />
              </i>
              <p className="text-xs lg:text-base">Invite People</p>
            </button>
            <button className="py-2 px-4 rounded-xl   bg-[black] border-[#8338ec] border-2 text-xs lg:text-base">
              Private
            </button>
            <button className="py-2 px-4  rounded-xl   bg-[#7879f1]   text-xs lg:text-base">
              Edit
            </button>
            <button className="py-2 px-3 rounded-xl flex gap-2 items-center bg-[black] border-2 border-[#8338ec] focus:border-2 ">
              <i className="text-xs lg:text-base">
                <GoCommentDiscussion />
              </i>
              <p className="text-xs lg:text-base">45 Comments</p>
            </button>
          </div>
          <div
            className="flex
            items-center flex-wrap gap-2 lg:items-center lg:ml-[20px] "
          >
            <p className="text-xs lg:text-base ">Total Progress 60%</p>
            <div className="   h-[9px] bg-[#edf2f7] w-[150px] lg:w-[250px] rounded-full">
              <div className="w-[60%] bg-[#805ad5] h-full rounded-full " />
            </div>
          </div>
        </div>
      </div>

      {/* table section */}
      <div
        className={style.tables}
        style={{ overflowX: "scroll", overflowY: "clip" }}
      >
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base ">To-Do-List(24)</p>
            <span className="flex items-center justify-center">
              <Image
                src="/btnAdd.svg"
                alt="ad"
                className="w-[36px] h-[36px] "
                width={300}
                height={300}
              />
            </span>
          </div>
          {TodoListInfo &&
            TodoListInfo.map((ele, i) => (
              <Card
                tag={ele.tag}
                clr={ele.color}
                description={ele.description}
                imgLink={ele.img}
                barLink={ele.bar}
                key={i}
              />
            ))}
        </div>

        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base">In Progress(2)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          {ProgressInfo &&
            ProgressInfo.map((ele, i) => (
              <div className="bg-[black] rounded-xl relative" key={i}>
                <Card
                  tag={ele.tag}
                  clr={ele.color}
                  description={ele.description}
                  imgLink={ele.img}
                  barLink={ele.bar}
                  tilt
                />
              </div>
            ))}
        </div>
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base">Done(3)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          {Done &&
            Done.map((ele, i) => (
              <Card
                key={i}
                tag={ele.tag}
                clr={ele.color}
                description={ele.description}
                imgLink={ele.img}
                barLink={ele.bar}
              />
            ))}
        </div>
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base">Revised(0)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col p-4 gap-4 w-full bg-[#211A75] rounded-xl">
            <div className="py-3 px-4 bg-[#15132B] capitalize border-2 border-[#7879F1] text-[#7879F1] border-dotted rounded-lg">
              Move card here
            </div>
          </div>
        </div>
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base ">Contant(2)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          {TodoListInfo &&
            TodoListInfo.map((ele, i) => (
              <Card
                key={i}
                tag={ele.tag}
                clr={ele.color}
                description={ele.description}
                imgLink={ele.img}
                barLink={ele.bar}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
