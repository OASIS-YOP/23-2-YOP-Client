import { useState, } from "react";
import * as s from "./style";
// import dotdotdot from "../../../assets/dotdotdot.svg";
// import UnLikedIcon from "../../../assets/UnLikedIcon.svg";
import MyPosts from "../../../Temp/mypage/mypost/MyPosts";
import CreatePost from "./ArtistPosts";
// import LikedIcon from "../../../assets/LikedIcon.svg";

const Posts = () => {  

  const artistslist = ['뉴진스', '방탄소년단', '에스파',];

  const [selectedArtist, setSelectedArtist] = useState(artistslist[0]);

  const onClickArtist = (artistName) => {
    setSelectedArtist(artistName);
  };

  const artists = artistslist.map((artist, index) => {
    return (
      <s.ArtistsTab
        key={artist + index}
        onClick={() => onClickArtist(artist)}
        className={artist === selectedArtist ? 'active' : ''}
      >{artist}</s.ArtistsTab>
    )
  })

  const selectedArtistInfo = MyPosts.find(
    (artist) => artist.artistName === selectedArtist
  );

  

  // const posts = createPost.map((post) => []);

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper
          
        >
          {artists}
        </s.ArtistsTabWrapper>
        <s.PostsWrapper>
          <CreatePost
            selectedArtistInfo={selectedArtistInfo} 
            selectedArtist={selectedArtist}
            // setCurrentArtist={setCurrentArtist}
          />
          {/* {posts.filter(post => post.artist === selectedArtist)} */}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  )
}

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