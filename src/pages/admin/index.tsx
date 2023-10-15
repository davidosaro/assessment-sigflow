import { useState } from "react";
import Button from "../../components/inputs/button";
import TextField from "../../components/inputs/textfield";
import AdminNavbar from "../../layouts/AdminNavbar";

import { Dropdown, IconButton } from 'rsuite';

export default function Admin() {
  const [searchValue, setSearchValue] = useState("");
  const renderIconButton = (props: Object, ref: any) => {
    return (
      <IconButton {...props} ref={ref} icon={(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="cursor-pointer">
          <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.99999 4.99999C10.4602 4.99999 10.8333 4.6269 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 9.99999 3.33333C9.53975 3.33333 9.16666 3.70642 9.16666 4.16666C9.16666 4.6269 9.53975 4.99999 9.99999 4.99999Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        )} />
    );
  };
  return (
    <div>
      <AdminNavbar />
      <div className="p-[30px_40px]">
        <header className="flex justify-between text-end mb-[24px]">
          <h1 className="font-primary text-primary font-semibold text-[20px]">Transformation</h1>
          <div className="space-y-[20px]">
            <div className="flex gap-x-[12px] justify-end">
              <Button 
                  text="Create a new Transformation"
                  className='!w-fit !font-bold !p-[8px_14px]'
                  // onClick={submitForm}
                />
                <Button 
                    text="Filters"
                    className='!w-fit !font-bold !p-[8px_14px]'
                    // onClick={submitForm}
                  />
            </div>
            <div>
              <TextField text='Search transformation' type="search" icon="search" className="!text-[14px] !border-[#E6E7E] !w-[329px]" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
          </div>
        </header>

        <div className="rounded-lg border-[1px] py-[20px] min-h-[760px] flex flex-col">
          
          <div className="relative overflow-x-auto">
              <table className="w-full text-[14px] font-normal text-left font-primary">
                  <thead className=" text-grey-300">
                      <tr>
                          <th scope="col" className="px-6 pt-3 font-normal">
                              Name
                          </th>
                          <th scope="col" className="px-6 pt-3 font-normal">
                              Creation Date
                          </th>
                          <th scope="col" className="px-6 pt-3 font-normal">
                            Status
                          </th>
                          <th scope="col" className="px-6 pt-3 font-normal">
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="border-b-[1px] text-primary-200">
                          <td className="px-6 pb-1 pt-6">
                              Gotham Asylum
                          </td>
                          <td className="px-6 pb-1 pt-6">
                            10th Aug, 2023
                          </td>
                          <td className="px-6 pb-1 pt-6">
                              <div className="bg-success-50 p-[4px_10px] w-fit rounded-md text-success">Paused</div>
                          </td>
                          <td className="px-6 pb-1 pt-6">
                            <Dropdown renderToggle={renderIconButton} placement="leftEnd"  className="font-primary ">
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200 px-[20px]">View Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200  px-[20px]">Archive Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px] text-red-600  px-[20px]">Delete</Dropdown.Item>
                            </Dropdown>
                          </td>
                      </tr>
                      <tr className="border-b-[1px] text-primary-200">
                          <td className="px-6 pb-2 pt-6">
                              Gotham Asylum
                          </td>
                          <td className="px-6 pb-2 pt-6">
                            10th Aug, 2023
                          </td>
                          <td className="px-6 py-1 pt-4">
                              <div className="bg-grey-500 p-[4px_10px] w-fit rounded-md text-white">Archived</div>
                          </td>
                          <td className="px-6 py-1 pt-4">
                            <Dropdown renderToggle={renderIconButton} placement="leftEnd"  className="font-primary ">
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200">View Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200 px-[20px]">Archive Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px] text-red-600 px-[20px]">Delete</Dropdown.Item>
                            </Dropdown>
                          </td>
                      </tr>
                      <tr className="border-b-[1px] text-primary-200">
                          <td className="px-6 pb-2 pt-6">
                              Gotham Asylum
                          </td>
                          <td className="px-6 pb-2 pt-6">
                            10th Aug, 2023
                          </td>
                          <td className="px-6 py-1 pt-4">
                              <div className="bg-success-50 p-[4px_10px] w-fit rounded-md text-success">Paused</div>
                          </td>
                          <td className="px-6 py-1 pt-4">
                            <Dropdown renderToggle={renderIconButton} placement="leftEnd"  className="font-primary ">
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200 px-[20px]">View Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200 px-[20px]">Archive Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px] text-red-600 px-[20px]">Delete</Dropdown.Item>
                            </Dropdown>
                          </td>
                      </tr>
                      <tr className="border-b-[1px] text-primary-200">
                          <td className="px-6 pb-2 pt-6">
                              Gotham Asylum
                          </td>
                          <td className="px-6 pb-2 pt-6">
                            10th Aug, 2023
                          </td>
                          <td className="px-6 py-1 pt-4">
                              <div className="bg-grey-500 p-[4px_10px] w-fit rounded-md text-white">Archived</div>
                          </td>
                          <td className="px-6 py-1 pt-4">
                            <Dropdown renderToggle={renderIconButton} placement="leftEnd" className="font-primary  z-50">
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M1.8109 6.88631C1.73713 6.7695 1.70025 6.7111 1.6796 6.62102C1.66409 6.55335 1.66409 6.44665 1.6796 6.37898C1.70025 6.2889 1.73713 6.2305 1.8109 6.1137C2.42049 5.14846 4.23501 2.70833 7.00022 2.70833C9.76543 2.70833 11.5799 5.14846 12.1895 6.1137C12.2633 6.2305 12.3002 6.2889 12.3208 6.37898C12.3363 6.44665 12.3363 6.55335 12.3208 6.62102C12.3002 6.7111 12.2633 6.7695 12.1895 6.88631C11.5799 7.85155 9.76543 10.2917 7.00022 10.2917C4.23501 10.2917 2.4205 7.85155 1.8109 6.88631Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M7.00022 8.125C7.89768 8.125 8.62522 7.39746 8.62522 6.5C8.62522 5.60254 7.89768 4.875 7.00022 4.875C6.10276 4.875 5.37522 5.60254 5.37522 6.5C5.37522 7.39746 6.10276 8.125 7.00022 8.125Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200  px-[20px]">View Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M2.66668 4.33149C2.57784 4.3292 2.51333 4.32405 2.45533 4.31252C2.02558 4.22704 1.68964 3.8911 1.60416 3.46135C1.58334 3.3567 1.58334 3.23085 1.58334 2.97917C1.58334 2.72748 1.58334 2.60163 1.60416 2.49699C1.68964 2.06724 2.02558 1.7313 2.45533 1.64582C2.55998 1.625 2.68582 1.625 2.93751 1.625H11.0625C11.3142 1.625 11.44 1.625 11.5447 1.64582C11.9744 1.7313 12.3104 2.06724 12.3959 2.49699C12.4167 2.60163 12.4167 2.72748 12.4167 2.97917C12.4167 3.23085 12.4167 3.3567 12.3959 3.46135C12.3104 3.8911 11.9744 4.22704 11.5447 4.31252C11.4867 4.32405 11.4222 4.3292 11.3333 4.33149M5.91668 7.04167H8.08334M2.66668 4.33333H11.3333V8.775C11.3333 9.68509 11.3333 10.1401 11.1562 10.4877C11.0004 10.7935 10.7518 11.0421 10.4461 11.1979C10.0985 11.375 9.64343 11.375 8.73334 11.375H5.26668C4.35659 11.375 3.90155 11.375 3.55394 11.1979C3.24818 11.0421 2.99959 10.7935 2.84379 10.4877C2.66668 10.1401 2.66668 9.68509 2.66668 8.775V4.33333Z" stroke="#828282" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px]  text-primary-200  px-[20px]">Archive Transformation</Dropdown.Item>
                              <Dropdown.Item icon={(
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                  <path d="M9.16667 3.25V2.81667C9.16667 2.20995 9.16667 1.90658 9.04859 1.67485C8.94473 1.471 8.779 1.30527 8.57516 1.20141C8.34342 1.08334 8.04006 1.08334 7.43333 1.08334H6.56667C5.95994 1.08334 5.65658 1.08334 5.42484 1.20141C5.221 1.30527 5.05527 1.471 4.95141 1.67485C4.83333 1.90658 4.83333 2.20995 4.83333 2.81667V3.25M5.91667 6.22917V8.9375M8.08333 6.22917V8.9375M2.125 3.25H11.875M10.7917 3.25V9.31667C10.7917 10.2268 10.7917 10.6818 10.6146 11.0294C10.4588 11.3352 10.2102 11.5838 9.9044 11.7396C9.5568 11.9167 9.10175 11.9167 8.19167 11.9167H5.80833C4.89825 11.9167 4.44321 11.9167 4.0956 11.7396C3.78984 11.5838 3.54124 11.3352 3.38545 11.0294C3.20833 10.6818 3.20833 10.2268 3.20833 9.31667V3.25" stroke="#AF202D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              )} className="flex items-center gap-x-[12px] text-red-600  px-[20px]">Delete</Dropdown.Item>
                            </Dropdown>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
              {/* pagination */}
              <div className="p-6 mt-auto">
                <div className="flex gap-x-[6px]">
                  <div className="w-[30px] h-[30px] bg-success rounded-[4.8px] flex items-center justify-center font-primary text-white font-medium text-[14px]">5</div>
                  <div className="w-[36px] h-[30px] bg-grey-400 rounded-[4.8px] flex items-center justify-center font-primary text-grey-300 font-medium text-[14px]">10</div>
                  <div className="w-[36px] h-[30px] bg-grey-400 rounded-[4.8px] flex items-center justify-center font-primary text-grey-300 font-medium text-[14px]">15</div>
                </div>
              </div>
              

        </div>
      </div>
    </div>
  )
}