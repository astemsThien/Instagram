import { USERS } from "./users";


export const POSTS = [
    {
        imageUrl:'https://vtbay.vn/files/sanpham/30/1/jpg/tour-dao-ngoc-phu-quoc-nam-2020.jpg',
        user: USERS[0].user,
        like: 7898,
        caption: 'Train Ride to Hogwarts.....',
        profile_picture: USERS[0].image,
        Comment:[
            {
                user: 'h.phong15th',
                comment: 'Wow! This build looks fire.'
            },
            {
                user: 'h.phong15th',
                comment: 'Super excited about..'
            },
            {
                user: '_hiuzh.nhuu_',
                comment: 'Once I wake up.'
            },
            {
                user: '_hiuzh.nhuu_',
                comment: 'I will finally be ready to code this up!'
            },
        ]
    }
]