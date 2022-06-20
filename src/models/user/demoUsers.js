const { User } = require("./user");

export const users = [
    new User(1,"usuarioPrueba","1a2S3d4FtestPassword",false),
    new User(2,"usuarioPizza","1q2W3e4RtestPassword",false),
    new User(3,"usuarioCapibara","9M8n7B6vtestPassword",true),
    new User(4,"1234","1234",true),
    new User(5,"asdf","asdf",false),
];

export function getUsers(){
    return this.users;
};

