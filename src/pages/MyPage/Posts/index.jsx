import { useEffect, useState } from 'react';
import * as s from './style';
// import dotdotdot from "../../../assets/dotdotdot.svg";
// import UnLikedIcon from "../../../assets/UnLikedIcon.svg";
import MyPosts from '../../../Temp/mypage/mypost/MyPosts';
import CreatePost from './ArtistPosts';

import mypageAPI from '../../../api/mypage/mypageAPI';
// import LikedIcon from "../../../assets/LikedIcon.svg";

const Posts = () => {
  const [userId, setUserId] = useState(1);
  const [postArtistList, setPostArtistList] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState();

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
    console.log(postArtistList[0]);
  };

  const getMyPostArtistTab = () => {
    mypageAPI.getMyPostArtistTab(userId).then((data) => {
      setPostArtistList(data.postArtistList);
      setSelectedArtist(data.postArtistList[0].artistId);
    });
  };

  const artists = postArtistList.map((item) => {
    return (
      <s.ArtistsTab
        key={`postArtist_${item.artistId}`}
        onClick={() => onClickArtist(item.artistId)}
        className={item.artistId === selectedArtist ? 'active' : ''}
      >
        {item.groupName}
      </s.ArtistsTab>
    );
  });

  useEffect(() => {
    getMyPostArtistTab();
  }, []);

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        <s.PostsWrapper>
          <CreatePost
            selectedArtist={selectedArtist}
            // setCurrentArtist={setCurrentArtist}
          />
          {/* {posts.filter(post => post.groupName === selectedArtist)} */}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  );
};

// const CreatePost = ({ selectedArtistInfo, setCurrentArtist, post }) => {

//   const artistPosts = selectedArtistInfo ? selectedArtistInfo.posts : [];

//   return (
//     <>
//     <s.PostFrame>
//       {artistPosts.length === 0 ? (
//         <div>아티스트의 도안을 꾸미고 포스트해보세요!</div>
//       ) : (
//         artistPosts.map((item, index) => (
//           <>
//           <s.leftContainer>
//             <s.PostImageFrame >
//               <s.PostImage src={item.fileUrl} />
//             </s.PostImageFrame>
//           </s.leftContainer>
//             <s.rightContainer>
//               <s.postInfoWrapper
//                 key={item.id}
//               >
//                 <s.nicknameWrapper>OnPol1004</s.nicknameWrapper>
//                 <s.tagsWrapper>
//                   #소속사 #아티스트 <br/> #멤버이름 #컬렉션명
//                 </s.tagsWrapper>
//                 <s.dateWrapper>
//                   2023.10.13
//                 </s.dateWrapper>
//                 <s.likeWrapper>
//                   <s.likeIcon
//                     src={ UnLikedIcon }
//                   />
//                   <s.likeCount
//                     key={item.id}
//                   >
//                     {item.likeCount}
//                   </s.likeCount>
//                 </s.likeWrapper>
//               </s.postInfoWrapper>
//               <s.moreIconWrapper>
//                 <s.moreIcon
//                   src={dotdotdot}
//                 />
//               </s.moreIconWrapper>
//             </s.rightContainer>
//             </>
//           ))
//         )}
//       </s.PostFrame>
//     </>
//   )
// };

export default Posts;
