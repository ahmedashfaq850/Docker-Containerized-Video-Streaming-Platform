import React from "react";
import { BiMenu } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context/ContextApi";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { mobileMenu, setMobileMenu } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const SearchQueyHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchbutton") &&
      searchQuery.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  console.log(mobileMenu)
  return (
    <>
      <header>
        <div className="flex items-center justify-between px-5 sticky top-0 left-0 w-[100%] h-[60px] bg-[#212023]">
          {/* logo and mobile menu section */}
          <div className="flex items-center gap-2">
            <BiMenu
              size="20px"
              className="block lg:hidden text-white cursor-pointer"
              onClick={()=> mobileMenuToggle()}
            />
            <Link to="/">
              <img src="images/logotest.png" width="110px" alt="" />
            </Link>
          </div>
          {/* search section */}
          <div className="lg:block w-[600px] hidden items-center gap-2 rounded-xl relative">
            <input
              className="w-[93%]  text-white pl-3 p-[5px] bg-[#151517] rounded-full  outline-none border border-[#4c4c4d]"
              type="search"
              placeholder="Search"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyUp={SearchQueyHandler}
            />
            <button className="p-2 bg-[#4c4c4d] absolute left-[522px] rounded-r-full">
              <BiSearchAlt2
                onClick={() => SearchQueyHandler("searchbutton")}
                className="text-white"
                size="20px"
              />
            </button>
          </div>

          {/* icons section */}
          <div className="text-white flex items-center gap-1">
            <div className="lg:hidden  w-[30px] h-[30px] bg-[#4c4c4d] mr-2 cursor-pointer flex justify-center items-center rounded-full">
              <BiSearchAlt size="20px" />
            </div>
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW895nwC2ZVuXQ6yDGAKli4MdeFE9PqW_Ewg&usqp=CAU"
              alt=""
            />
            <p className="text-[12px] hidden lg:block">Ahmed Ashfaq</p>
            <BiChevronDown />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
