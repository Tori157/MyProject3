import { memberManagement } from "./data/members.js";
const { getMembers, findMember } = memberManagement();

//your student id, firstname, and lastname here
// 65130500112

function memberForm() {
  const addEventHandler = () => {
    const ButtonMember = document.getElementById(`member`);
    ButtonMember.addEventListener(`click`, memberHandler);
  };

  const memberHandler = () => {
    const searchMemberID = document.getElementById(`searchMember`);
    searchMemberID.innerHTML = ``;

    const tagp = document.createElement("p");
    const taginput = document.createElement("input");
    const buttonbtn = document.createElement("button");

    tagp.textContent = "Your Member Id:";
    taginput.id = "memberId";
    buttonbtn.textContent = "search";

    searchMemberID.appendChild(tagp);
    searchMemberID.appendChild(taginput);
    searchMemberID.appendChild(buttonbtn);

    buttonbtn.addEventListener("click", searchHandler);
  };
    
  const searchHandler = () => {
    const foundMember = document.getElementById("foundMember");
    foundMember.innerHTML = ``;

    const inputbox = document.getElementById("memberId");
    const MemberId = parseInt(inputbox.value);

    const thismember = findMember(MemberId);
    const tagpid = document.createElement("p");
    const tagpfirstname = document.createElement("p");
    const tagplasname = document.createElement("p");
    const tagpemail = document.createElement("p");
    const tagpaddress = document.createElement("p");

    tagpid.textContent = `id: ${thismember.id}`;
    tagpfirstname.textContent = `firstname: ${thismember.firstname}`;
    tagplasname.textContent = `lastname: ${thismember.lastname}`;
    tagpemail.textContent = `email: ${thismember.email}`;
    tagpaddress.textContent = `address: ${thismember.address}`;

    foundMember.appendChild(tagpid);
    foundMember.appendChild(tagpfirstname);
    foundMember.appendChild(tagplasname);
    foundMember.appendChild(tagpemail);
    foundMember.appendChild(tagpaddress);

    inputbox.value = ``;
  };

  return {
    addEventHandler
  };
}

const { addEventHandler } = memberForm();
addEventHandler();
