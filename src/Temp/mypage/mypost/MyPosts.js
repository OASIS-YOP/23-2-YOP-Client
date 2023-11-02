const MyPosts = [
  {
    artistName: '뉴진스',
    posts:
      [
        { 
          id: 1,
          collection: 'Get Up',
          title: '하니V1',
          likeCount: 10040,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/하니V1.jpeg`,
        },
        {
          id: 2,
          collection: 'Get Up',
          title: "하니V2",
          likeCount: 1000,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/하니V1.jpeg`,
        },
      ],
  },
  {
    artistName: '방탄소년단',
    posts:
      [
        {
          id: 1,
          collection: 'Butter',
          title: '정국V1',
          likeCount: 20,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/정국V1.jpeg`,
        },
        {
          id: 2,
          collection: 'Butter',
          title: '정국V2',
          likeCount: 10,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/정국V1.jpeg`,
        },
      ],
  },
  {
    artistName: '아이유',
    posts:
      [
        {
          id: 1,
          collection: 'Lilac',
          title: '',
          likeCount: 100,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/.jpeg`,
        },
        {
          id: 2,
          collection: 'Lilac',
          title: '',
          likeCount: 10,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/.jpeg`,
        },
      ],
  },
  {
    artistName: '에스파',
    posts:
      [
        {
          id: 1,
          collection: 'My World',
          title: '',
          likeCount: 1000,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/.jpeg`,
        },
        {
          id: 2,
          collection: 'My World',
          title: '',
          likeCount: 100,
          fileUrl: `${process.env.PUBLIC_URL}/images/design/.jpeg`,
        },
      ],



  },



]

export default MyPosts;