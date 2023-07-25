import NavBar from '../features/navbar/Navbar';
import UserProfile from '../features/user/components/UserProfile';
import Footer from '../features/common/Footer/Footer'
function UserProfilePage() {
  return (
    <div>
      <NavBar>
       </NavBar>
        <UserProfile></UserProfile>
        <Footer></Footer>
      
    </div>
  );
}

export default UserProfilePage;