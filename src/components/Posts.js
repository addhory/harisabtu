import React, { useEffect as reactEffect } from 'react';
import { postList_DUMMY } from '../utils/constans';

// class Posts extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       postData: [],
//     };
//   }

//   componentDidMount() {
//     console.log(this.state.postData);

//     this.setState({
//       postData: postList_DUMMY,
//     });
//   }

//   render() {
//     console.log(this.state.postData);

//     return this.state.postData.map((post) => {
//       return (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.description}</p>
//         </div>
//       );
//     });
//   }
// }

// export default Posts;

let content;

const Posts = () => {
  const [postData, setPostData] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  reactEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPostData(postList_DUMMY);
      setIsLoading(false);
    }, 3000);
  }, [postData]);

  if (isLoading === true) {
    content = <p>Loading ...</p>;
  }

  if (postData.length > 0) {
    content = postData.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      );
    });
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default Posts;
