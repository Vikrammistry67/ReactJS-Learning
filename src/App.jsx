// import { useState } from 'react';
import './App.css'
import Tooltip from './components/HooksLearning/useLayoutEffectHoo/Tooltip'
// import Search from './functionality/seacrFuctionality/Search'
// // import SearchParams from './functionality/searcParameter/SearchParams'
// const App = () => {


//   const [userData, setUserData] = useState(
//     {
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     },
//   );


//   const handleChange = (e) => {

//     const { name, value } = e.target;

//     setUserData({
//       ...userData,
//       [name]: value
//     });

//   };

//   const handleForm = (e) => {
//     e.preventDefault();
//     if (userData.password === userData.confirmPassword) {
//       alert('ohk redirected to login')
//     } else alert('password does not match')
//   };



//   return (
//     <div>
//       <form onSubmit={handleForm} >
//         <input name='username' value={userData.username} onChange={handleChange} type="text" placeholder='username' /> <br /> <br />
//         <input name='email' value={userData.email} onChange={handleChange} type="email" placeholder='email' /> <br /> <br />
//         <input name='password' value={userData.password} onChange={handleChange} type="password" placeholder='password' /> <br /> <br />
//         <input name='confirmPassword' value={userData.confirmPassword} onChange={handleChange} type="confirmPassword" placeholder='confirm  Password' /> <br /> <br />

//         <button type='submit'>Create an account</button>
//       </form>
//       {/* <SearchParams /> */}
//     </div>
//   )

// }

// export default App














const App = () => {
  return (
    <div>
      {/* <Search/> */}

      <Tooltip/>
    </div>
  )
}

export default App











