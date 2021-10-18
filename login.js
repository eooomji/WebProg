const myInfo = {
    id: "ej",
    pw: "1234"
};

const login = (id, pw) => {
    if (id === myInfo.id) {
        if (pw === myInfo.pw)
        return true;
        else return false;
    }
    else return false;
};

const successLogin = login("ej", "1234");
if (successLogin) console.log(`${myInfo.id}님 환영해유`);
else console.log("다시 입력해유");
