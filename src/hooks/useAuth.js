import { useSelector } from 'react-redux'

const useAuth = () => {

  const users = useSelector(state => state.user.loginUsers);
  const isLogin = users.length > 0

  return {
    isLogin
  }

}

export default useAuth;