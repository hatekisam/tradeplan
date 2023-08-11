import React from 'react'
import image from "../assets/planImage.png"
const History = () => {
        const tradePlans = [
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        plan: {
                                assets: "EURJPY.FOREX",
                                action: "Buy",
                                entry: "132.4",
                                target: "132.4",
                                stop: "132.4"
                        },
                        userplan: image,
                        agree: 0,
                        disagree: 1,
                        result: "waiting",
                },
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        plan: {
                                assets: "EURJPY.FOREX",
                                action: "Buy",
                                entry: "132.4",
                                target: "132.4",
                                stop: "132.4"
                        },
                        userplan: image,
                        agree: 0,
                        disagree: 1,
                        result: "waiting",
                },
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        plan: {
                                assets: "EURJPY.FOREX",
                                action: "Buy",
                                entry: "132.4",
                                target: "132.4",
                                stop: "132.4"
                        },
                        userplan: image,
                        agree: 0,
                        disagree: 1,
                        result: "waiting",
                },
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        plan: {
                                assets: "EURJPY.FOREX",
                                action: "Buy",
                                entry: "132.4",
                                target: "132.4",
                                stop: "132.4"
                        },
                        userplan: image,
                        agree: 0,
                        disagree: 1,
                        result: "waiting",
                },
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        plan: {
                                assets: "EURJPY.FOREX",
                                action: "Buy",
                                entry: "132.4",
                                target: "132.4",
                                stop: "132.4"
                        },
                        userplan: image,
                        agree: 0,
                        disagree: 1,
                        result: "waiting",
                },
                {
                        startDate: new Date(),
                        endDate: new Date(),
                        plan: {
                                assets: "EURJPY.FOREX",
                                action: "Buy",
                                entry: "132.4",
                                target: "132.4",
                                stop: "132.4"
                        },
                        userplan: image,
                        agree: 0,
                        disagree: 1,
                        result: "waiting",
                },
        ]
        return (
                <div className='p-[1vw] h-[100vh]'>
                        <div className="w-full h-full bg-white rounded-[2vw] p-[2vw] overflow-y-auto">
                                <div>
                                        <p className='text-[.8vw] text-[#676767] font-medium my-[0.5vh]'>Sort By</p>
                                        <div className="flex flex-row justify-between">
                                                <div className="flex flex-row gap-[1vw]">
                                                        <select name="" id="" className='bg-[#EAEAEA] outline-none rounded-md w-fit px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]'>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                                <option value="">USD</option>
                                                        </select>
                                                        <input type="text" placeholder='Search' className='bg-[#EAEAEA] outline-none rounded-md w-[40vw] px-[1vw] py-[1vh] placeholder:text-[#636363] my-[1vh]' />
                                                </div>
                                                <button className='bg-[#0094FF] px-[2vw] py-[1vh] rounded-full h-fit text-white my-[1vh] flex flex-row gap-[0.5vw]'>
                                                        <img src="/svg/add.svg" alt="" />
                                                        <p>Add Trade Plan</p>
                                                </button>
                                        </div>
                                        <div className='my-[1vh]'>
                                                <table className="w-full rounded-lg text-[rgba(67,67,67,0.71)] text-[.8vw]">
                                                        <tr className="bg-[rgba(255,107,0,0.12)] text-[#FF6B00] py-10 rounded-md">
                                                                <th className="p-2">Start Date</th>
                                                                <th className="p-2">End Date</th>
                                                                <th className="p-2">Plan</th>
                                                                <th className="p-2">User Plan</th>
                                                                <th className="p-2">Agree</th>
                                                                <th className="p-2">Disagree</th>
                                                                <th className="p-2">Result</th>
                                                                <th className="p-2">Action</th>
                                                        </tr>
                                                        {tradePlans.map((trade, index) => (
                                                                <tr
                                                                        key={index}
                                                                        className="bg-[rgba(0,148,255,0.07)] my-2"
                                                                >
                                                                        <td className="p-2">
                                                                                <div className='bg-[rgba(0,148,255,0.09)] text-[#0094FF] flex flex-col gap-[.5vh] p-[1vw] py-[.5vh] rounded-md'>
                                                                                        <p>{trade.startDate.getDate().toLocaleString()}</p>
                                                                                        <p>{trade.startDate.getTime().toLocaleString()}</p>
                                                                                </div>
                                                                        </td>
                                                                        <td className="p-2">
                                                                                <div className='bg-[rgba(0,148,255,0.09)] text-[#0094FF] flex flex-col gap-[.5vh] p-[1vw] py-[.5vh] rounded-md'>
                                                                                        <p>{trade.endDate.getDate().toLocaleString()}</p>
                                                                                        <p>{trade.endDate.getTime().toLocaleString()}</p>
                                                                                </div>
                                                                        </td>
                                                                        <td className="p-2 flex flex-row gap-[0.3vw] flex-wrap">
                                                                                <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[.8vw] py-[1vh] px-[0.4vw] h-fit'>Assets : {trade.plan.assets}</p>
                                                                                <p className='bg-[rgba(36,255,0,0.08)] rounded-md text-[#0EAB00] text-[.8vw] py-[1vh] px-[0.4vw] h-fit'>Action : {trade.plan.action}</p>
                                                                                <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[.8vw] py-[1vh] px-[0.4vw] h-fit'>Entry : {trade.plan.entry}</p>
                                                                                <p className='bg-[rgba(255,107,0,0.08)] rounded-md text-[#FF6B00] text-[.8vw] py-[1vh] px-[0.4vw] h-fit'>Target : {trade.plan.target}</p>
                                                                                <p className='bg-[rgba(255,0,0,0.08)] rounded-md text-[#E00000] text-[.8vw] py-[1vh] px-[0.4vw] h-fit'>Stop : {trade.plan.stop}</p>
                                                                        </td>
                                                                        <td className="p-2">
                                                                                <div className='bg-white w-[7vw]'>
                                                                                        <img src={trade.userplan} alt="" />
                                                                                </div>
                                                                        </td>
                                                                        <td className="p-2">
                                                                                <p className='bg-[rgba(0,148,255,0.09)] text-[#0094FF] p-[.7vw] px-[1vw] rounded-md flex items-center justify-center h-fit w-fit'>{trade.agree}</p>
                                                                        </td>
                                                                        <td className="p-2">
                                                                                <p className='bg-[rgba(0,148,255,0.09)] text-[#0094FF] p-[.7vw] px-[1vw] rounded-md flex items-center justify-center h-fit w-fit'>{trade.disagree}</p>
                                                                        </td>
                                                                        <td className='p-2' >
                                                                                <p className={trade.result === "waiting" ? "text-[#E6CA00] rounded-md bg-[rgba(255,232,64,0.21)] px-[1vw] py-[.7vh] " : "bg-[rgba(36,255,0,0.08)] rounded-md text-[#0EAB00] px-[1vw] py-[.7vh] "}>{trade.result}</p>
                                                                        </td>
                                                                        <td className="p-2 ">
                                                                                <div className='bg-[rgba(225,0,0,0.06)] p-[.5vw] rounded-md'>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                                                <path d="M15.5 4H20.5V6H18.5V19C18.5 19.5523 18.0523 20 17.5 20H3.5C2.94772 20 2.5 19.5523 2.5 19V6H0.5V4H5.5V1C5.5 0.44772 5.94772 0 6.5 0H14.5C15.0523 0 15.5 0.44772 15.5 1V4ZM16.5 6H4.5V18H16.5V6ZM7.5 9H9.5V15H7.5V9ZM11.5 9H13.5V15H11.5V9ZM7.5 2V4H13.5V2H7.5Z" fill="#E10000" />
                                                                                        </svg>
                                                                                </div>
                                                                        </td>
                                                                </tr>
                                                        ))}
                                                </table>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default History