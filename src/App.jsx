// // import { useState } from 'react';
// import './App.css'
// import UseCounter from './components/HooksLearning/cutomHooks/UseCounter'
// // import Parent from './components/HooksLearning/optimizationHooks/Parent'
// // import Tooltip from './components/HooksLearning/useLayoutEffectHoo/Tooltip'
// // import Search from './functionality/seacrFuctionality/Search'
// // // import SearchParams from './functionality/searcParameter/SearchParams'
// // const App = () => {

// import { useId } from "react";
// import useFetch from "./components/HooksLearning/cutomHooks/useFetch"
// import MainPageForLearning from "./MainPageForLearning";
import InterViewMainPage from "./InterViewAskedQuestions/ForHandleInterviewQuestionMainPage/InterViewMainPage";


// //   const [userData, setUserData] = useState(
// //     {
// //       username: '',
// //       email: '',
// //       password: '',
// //       confirmPassword: ''
// //     },
// //   );


// //   const handleChange = (e) => {

// //     const { name, value } = e.target;

// //     setUserData({
// //       ...userData,
// //       [name]: value
// //     });

// //   };

// //   const handleForm = (e) => {
// //     e.preventDefault();
// //     if (userData.password === userData.confirmPassword) {
// //       alert('ohk redirected to login')
// //     } else alert('password does not match')
// //   };



// //   return (
// //     <div>
// //       <form onSubmit={handleForm} >
// //         <input name='username' value={userData.username} onChange={handleChange} type="text" placeholder='username' /> <br /> <br />
// //         <input name='email' value={userData.email} onChange={handleChange} type="email" placeholder='email' /> <br /> <br />
// //         <input name='password' value={userData.password} onChange={handleChange} type="password" placeholder='password' /> <br /> <br />
// //         <input name='confirmPassword' value={userData.confirmPassword} onChange={handleChange} type="confirmPassword" placeholder='confirm  Password' /> <br /> <br />

// //         <button type='submit'>Create an account</button>
// //       </form>
// //       {/* <SearchParams /> */}
// //     </div>
// //   )

// // }

// // export default App














// const App = () => {

//   const [count, setCount] = UseCounter(0);

//   return (
//     <div>
//       {/* <Search/> */}

//       {/* <Tooltip/> */}

//       {/* <Parent/> */}

//       <h1>{count}</h1>
//       <button onClick={setCount}>increase</button>
//     </div>
//   )
// }

// export default App












// const App = () => {

//   const [data, error, loading] = useFetch('https://fakestoreapi.com/users');
//   let id = useId();
//   if (loading) return <p>loading...</p>
//   if (error) return <p style={{ color: 'red' }}>Something went wrong</p>
//   return (
//     <div>
//       {data.map(user => {
//         return <h3>{user.username}</h3>
//       })};

//       <h2>ID : {id.replaceAll('_', '') + 'snstvd3'}</h2>
//       <h2>ID : {id.replaceAll('_', '') + 'snstvd3'}</h2>

//     </div>
//   )
// }

// export default App





















const App = () => {
  return (
    <div>
      {/* <MainPageForLearning/> */}

      <InterViewMainPage/>
    </div>
  )
}

export default App