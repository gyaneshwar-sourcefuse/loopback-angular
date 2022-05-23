import faker from "@faker-js/faker";
import { User } from "../interfaces/app";

// export function generateUsers() {
//     const data: User[] = [];


//     for (let i = 0; i < 10; i++) {

//         data.push({
//             id: faker.random.alphaNumeric(36),
//             name: `${faker.name.findName()}`,
//             email: faker.internet.email(),
//             role: faker.datatype.number({ min: 1, max: 3 }),
//             createdAt: faker.date.recent(10).toString()
//         });

//     }

//     return data;
// }


export function getUsers() : User[] {
    return [
        {
            "id": "y3rm7r7qhb1u8igqe0wu4ixzikx4s78wfer4",
            "name": "Celia Hyatt",
            "email": "Valentin.Schulist@yahoo.com",
            "role": 1,
            "createdAt": "2022-05-11T05:39:51.259Z"
        },
        {
            "id": "ezwbc87yqagrnw2z6hg87nbmk8blgcibgybn",
            "name": "Mr. Lena Hodkiewicz",
            "email": "Tom.Braun95@gmail.com",
            "role": 2,
            "createdAt": "2022-05-12T04:41:30.978Z"
        },
        {
            "id": "fn6aeq23r6ojzzivhn7g5vqbb0ey4c0cjxcu",
            "name": "Bernadette Watsica",
            "email": "Nicholaus52@hotmail.com",
            "role": 3,
            "createdAt": "2022-05-09T06:46:02.335Z"
        },
        {
            "id": "zenolh8l5ltqcldbw15glbwuu9imj5c4g9fy",
            "name": "Roberta Lesch",
            "email": "Kyle.Christiansen0@hotmail.com",
            "role": 3,
            "createdAt": "2022-05-11T23:01:33.549Z"
        },
        {
            "id": "l93wtbfownxeyezvxucvi361fc5wvmx5vmyq",
            "name": "Carl Bailey",
            "email": "Seamus.Hackett52@yahoo.com",
            "role": 3,
            "createdAt": "2022-05-10T09:03:34.080Z"
        },
        {
            "id": "5j7thd25wv3ej2hikwk4xhs97l9kccnihe3l",
            "name": "Ervin Treutel",
            "email": "Lorenza.Smith@gmail.com",
            "role": 3,
            "createdAt": "2022-05-09T12:48:54.962Z"
        },
        {
            "id": "egj3hd5iuq57t41jf9dfsshvuo3qzbs4rthq",
            "name": "Cynthia Little",
            "email": "Winfield59@yahoo.com",
            "role": 1,
            "createdAt": "2022-05-12T02:15:03.353Z"
        },
        {
            "id": "mp32i1qtw9dtx4is4j6xnmuu8otfbaspjeny",
            "name": "Luther Wuckert",
            "email": "Timmothy_Ankunding@yahoo.com",
            "role": 2,
            "createdAt": "2022-05-13T18:46:14.085Z"
        },
        {
            "id": "68kjqgb7rvyfe7lpz7b6nvxymlkpvtjts6r4",
            "name": "Rickey Bauch",
            "email": "Josue.Harvey20@yahoo.com",
            "role": 1,
            "createdAt": "2022-05-07T10:21:23.472Z"
        },
        {
            "id": "asoh7939ohtz0yjwn28pbsj0njnfv4wf55tk",
            "name": "Javier Kohler",
            "email": "Emile_Swift46@gmail.com",
            "role": 2,
            "createdAt": "2022-05-08T22:02:30.018Z"
        }
    ];
}