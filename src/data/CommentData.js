

export const MockComment = [
    {
        id: 1221, // this is generated when the comment is saved to the database, so it comes back as the data is requested 
        comment:'Hello from the other side bro!',
        username:'Osita',
        userId:'1', // id gotten from registering the user.
        isParent: true,
        ParentId: null,
        time: "2022-03-25",
    },
    {
        id: 1222, // this is generated when the comment is saved to the database, so it comes back as the data is requested 
        comment:'That fine igbo hausa brother ',
        username:'Rose',
        userId:'2', // id gotten from registering the user.
        isParent: false,
        ParentId: 1221, // we can use either the parent user id or just the parent id....here we used parent id
        time: "2022-03-25",
    },
    {
        id: 1223, // this is generated when the comment is saved to the database, so it comes back as the data is requested 
        comment:'Una no sabi yan better yan! ',
        username:'Lewis',
        userId:'3', // id gotten from registering the user.
        isParent: true,
        ParentId: null,
        time: "2022-03-25",
    },
    {
        id: 1224, // this is generated when the comment is saved to the database, so it comes back as the data is requested 
        comment:'Who goes you my headpan don full bro! ',
        username:'EjiEji',
        userId:'4', // id gotten from registering the user.
        isParent: false,
        ParentId: 1223,
        time: "2022-03-25",
    },
]