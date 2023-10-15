export default function AdminNavbar() {
  return (
    <div className="flex justify-end p-[20px_40px] border-b-[1px] ">
      <div className="flex gap-x-[6px] items-center">
        <div className="bg-success text-white rounded-md text-[24px] leading-[0px] font-bold w-[38px] h-[38px] flex items-center justify-center font-secondary">S</div>
        <div className="text-[14px] space-y-0">
          <p className="text-primary font-primary font-semibold">Sigflow</p>
          <p className="font-normal font-primary text-grey-300">Adeoluwa Siyanbade</p>
        </div>
      </div>
    </div>
  )
}