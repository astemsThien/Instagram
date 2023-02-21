import { USERS } from "./users";


export const POSTS = [
    {
        imageUrl:'https://vtbay.vn/files/sanpham/30/1/jpg/tour-dao-ngoc-phu-quoc-nam-2020.jpg',
        user: USERS[0].user,
        likes: 68542,
        caption: 'Phú Quốc nổi tiếng với những bãi biển dài hoang sơ : Bãi Sao , Bãi Khem , Bãi Trường , Bãi Dãi.',
        profile_picture: USERS[0].image,
        comments:[
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
    },
    {
        imageUrl:'https://img3.thuthuatphanmem.vn/uploads/2019/07/13/anh-dep-cau-rong-da-nang-phun-nuoc_085826155.jpg',
        user: USERS[3].user,
        likes: 7898,
        caption: 'Cầu Rồng là một trong những biểu tượng đáng tự hào của người dân thành phố Đà Nẵng.',
        profile_picture: USERS[3].image,
        comments:[
            {
                user: 'h.phong15th',
                comment: 'Wow! This build looks fire.'
            },
            
            {
                user: '_hiuzh.nhuu_',
                comment: 'I will finally be ready to code this up!'
            },
        ]
    },
    {
        imageUrl:'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/canh-dep-sapa.jpg',
        user: USERS[4].user,
        likes: 254,
        caption: 'Sapa cũng có rất nhiều cảnh đẹp như Thác Bạc, cầu Mây, cổng Trời, đỉnh Phan xi Păng, rừng trúc, động Tả Phìn, bãi đá cổ Sapa trong thung lũng Mường Hoa.',
        profile_picture: USERS[4].image,
        comments:[
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
            
        ]
    },
    {
        imageUrl:'https://vcdn1-vnexpress.vnecdn.net/2021/03/19/NhaTrang-KhoaTran-27-1616120145.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=P6rNJD2Fm6OK-HTwBviZ4A',
        user: USERS[2].user,
        likes: 99563,
        caption: 'Được thiên nhiên ban tặng những bãi biển, vùng vịnh đẹp cùng nhiều đảo lớn nhỏ, thành phố còn sở hữu nhiều danh lam thắng cảnh, điểm tham quan, vui chơi và cơ sở nghỉ dưỡng.',
        profile_picture: USERS[2].image,
        comments:[
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
    },
]