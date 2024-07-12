import { provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import Button from 'react-bootstrap/Button';

export default function LogInButton({ auth, user }) {
  return (
    <Button
      variant={user ? "outline-secondary" : "primary"}
      size="sm"
      className="rounded-0"
      style={{
        fontSize: "0.4rem",
        position: "absolute",
        top: "0",
        right: "0",
      }}
      onClick={() => {
        signInWithPopup(auth, provider);
      }}
    >
      {user ? user.displayName : "Log In"}
    </Button>
  )
}

