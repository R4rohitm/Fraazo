import React, { useState } from "react";

const InviteAFriend = () => {
  const [inviteCode, setInviteCode] = useState("FRZ-6002189");
  const [copiedState, setCopiedState] = useState(false);
  const copyTime = () => {
    setCopiedState(true);
    setTimeout(() => {
      setCopiedState(false);
    }, 3000);
  };
  return (
    <div>
      <div class="h-14 text-[28px] text-semibold flex justify-start items-start">
        Invite A Friend
      </div>
      <div class="h-14 text-[20px] mt-4 text-[#6a6a6a] flex justify-start items-start">
        Invite your friend to shop on &nbsp;
        <span class="text-black">Fraazo </span> &nbsp; & get &nbsp;
        <span class="text-black">₹100 off on purchased item</span>
      </div>
      <div class="flex">
        <div class="border rounded-full border-[#4FBB90] text-[18px] text-[#4FBB90] font-medium w-60 h-14 flex px-3 justify-between items-center">
          <div class="box-border pl-4">{inviteCode}</div>
          <div
            class="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(inviteCode);
              copyTime();
            }}
          >
            <img
              src="https://webasset.fraazo.com/production/invitecode.58d2f6c2d624079289d6.png"
              alt="copy"
            />
          </div>
        </div>
        <div>
          <img
            src="https://webasset.fraazo.com/production/invitefriendbg.48dca109d84fb9855929.png"
            alt="giver"
          />
        </div>
      </div>
      {copiedState ? (
        <div class="absolute w-[25%] h-9 flex justify-center items-center left-[40%] top-[76%] bg-black text-white text-[15px] rounded-md">
          Copied to clipboard
        </div>
      ) : null}
    </div>
  );
};

export default InviteAFriend;
