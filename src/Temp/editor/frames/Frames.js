const Frames = [
  {
    id: 1,
    name: '프레임1',
    elements: [
      {
        id: 1,
        name: '프레임1-1',
        type: 'image',
        fileUrl: `${process.env.PUBLIC_URL}/images/frames/BlackFrame.svg`,
      },
      {
        id: 2,
        name: '프레임1-2',
        type: 'image',
        fileUrl: `${process.env.PUBLIC_URL}/images/frames/WhiteFrame.svg`,
      },
      {
        id: 3,
        name: '프레임1-3',
        type: 'image',
        fileUrl: `${process.env.PUBLIC_URL}/images/frames/PinkFrame.png`,
      },
      {
        id: 4,
        name: '프레임1-4',
        type: 'image',
        fileUrl: `${process.env.PUBLIC_URL}/images/frames/CheckFrame.png`,
      },
    ]
  },
  {
    id: 2,
    name: '프레임2',
    elements: [
      {
        id: 1,
        name: '프레임2-1',
        type: 'image',
        fileUrl: '',
      },
      {
        id: 2,
        name: '프레임2-2',
        type: 'image',
        fileUrl: '',
      },
    ],
  },
]

export default Frames;