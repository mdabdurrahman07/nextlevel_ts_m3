// type guard
// in typeof

type alphaNumeric = number | string;

const add = (num1: alphaNumeric, num2: alphaNumeric) => {
  //* type narrowing
  if (typeof num1 === "number" && typeof num2 === "number") {
    num1 + num2;
  } else {
    num1.toString();
  }
};

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  // here we used in guard to user user has "role" property or not
  if ("role" in user) {
    console.log(`This ${user.name} and his role is : ${user.role}`);
  }else{
    console.log(`${user.name}`)
  }
};

getUserInfo({
    name:"Jamil",
    role:"Admin"
})
