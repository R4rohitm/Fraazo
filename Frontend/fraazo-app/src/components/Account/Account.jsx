import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import HelpAndSupport from "./HelpAndSupport";
import InviteAFriend from "./InviteAFriend";
// import EditUser from "./EditUser";
import MyCredits from "./MyCredits";
import MyOrders from "./MyOrders";
import { UserContext } from "../../context/UserContext";

const Account = () => {
  const [loader, setLoader] = useState(false);
  const [componentsState, setComponentsState] = useState({
    myorders: true,
    mycredits: false,
    inviteafriends: false,
    helpandsupport: false,
  });

  const { userId, setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  const handleMyOrder = () => {
    setComponentsState({
      myorders: true,
      mycredits: false,
      inviteafriends: false,
      helpandsupport: false,
    });
  };

  const handleMyCredits = () => {
    setComponentsState({
      myorders: false,
      mycredits: true,
      inviteafriends: false,
      helpandsupport: false,
    });
  };
  const handleInviteAFriend = () => {
    setComponentsState({
      myorders: false,
      mycredits: false,
      inviteafriends: true,
      helpandsupport: false,
    });
  };
  const handleHelpAndSupport = () => {
    setComponentsState({
      myorders: false,
      mycredits: false,
      inviteafriends: false,
      helpandsupport: true,
    });
  };

  const handleLogout = () => {
    setLoader(true);
    localStorage.removeItem("userId");
    setUserId(localStorage.getItem("userId") || null);
    setTimeout(() => {
      setLoader(false);
      navigate("/");
    }, 2000);
  };
  return (
    <div class="border h-[550px] w-full flex gap-7 bg-[#FBFBFB] ">
      {/* left div */}
      <div class="border bg-[#F9F9F9] h-full ml-16 w-[330px]">
        <div>
          <div class="flex justify-center h-40 items-center">
            <img
              class="h-28 bg-[white] rounded-full"
              src="https://webasset.fraazo.com/production/pomegranate.745c8fe5035674e9dfdc.png"
              alt="avatar"
            />
          </div>
          <div class="flex justify-center items-center gap-3">
            <p>+91 9673216067</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 cursor-pointer"
              viewBox="0 0 512 512"
            >
              <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
            </svg>
          </div>
        </div>
        <div class=" h-[330px] font-Quicksand pt-6">
          <div
            onClick={handleMyOrder}
            class="w-full h-14 px-4 flex justify-start items-center gap-7 cursor-pointer border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4"
              viewBox="0 0 448 512"
            >
              <path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z" />
            </svg>
            <p>My Orders</p>
          </div>
          <div
            onClick={handleMyCredits}
            class="w-full h-14 px-4 flex justify-between items-center  border"
          >
            <div class="flex justify-start items-center gap-7 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4"
                viewBox="0 0 512 512"
              >
                <path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
              </svg>
              <p>My Credits</p>
            </div>
            <div class="text-[#d6a13d]">₹ 0</div>
          </div>
          <div
            onClick={handleInviteAFriend}
            class="w-full h-14 px-4 flex justify-start items-center gap-7 cursor-pointer border"
          >
            <img
              src="https://webasset.fraazo.com/production/invitefriends.064279a738aa1138fe0c.png"
              class="h-4"
              alt="invite friend"
            />
            <p>Invite A Friend</p>
          </div>
          <div
            onClick={handleHelpAndSupport}
            class="w-full h-14 px-4 flex justify-start items-center gap-7 cursor-pointer border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4"
              viewBox="0 0 512 512"
            >
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z" />
            </svg>
            <p>Help & Support</p>
          </div>
          <div
            onClick={() => handleLogout()}
            class="w-full h-14 px-4 text-[#D01414] flex justify-start items-center gap-7 cursor-pointer border"
          >
            {!loader ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 fill-[#D01414]"
                  viewBox="0 0 512 512"
                >
                  <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
                </svg>
                <p>Logout</p>
              </>
            ) : (
              <svg
                aria-hidden="true"
                class="mr-2 w-8 h-8 text-gray-200 animate-spin bg-[white] fill-red-700"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {/* right div */}
      <div class="w-4/6 py-8 font-Quicksand ">
        {componentsState.myorders ? (
          <MyOrders />
        ) : componentsState.mycredits ? (
          <MyCredits />
        ) : componentsState.inviteafriends ? (
          <InviteAFriend />
        ) : componentsState.helpandsupport ? (
          <HelpAndSupport />
        ) : null}
      </div>
    </div>
  );
};

export default Account;
