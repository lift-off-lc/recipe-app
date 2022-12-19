import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useAuth } from "../context/AuthContext";
import { Alert } from '@mui/material';



//import { useAuth } from "../../contexts/AuthContext";

export default function ErrorMessage() {
  const { error, setError } = useAuth();

  return (
    error && (
    <Alert  severity="error" icon={false} className="auth-alert-box mx-auto w-justify h-justify">
        <div className="rounded-md max-w-md w-full p-2 mt-1">
          <div className="flex">
            <div className="flex-shrink-0">
              <CancelOutlinedIcon
                onClick={() => setError("")}
                className="h-5 w-5 text-red"
                aria-hidden="true"
              /> <p className='fs-smallest fw-normal'>Click to Exit</p>
            </div>
            <div className="ml-1">
              <h3 className="text-sm font-medium text-red">
                Error: {error}
              </h3>
            </div>
          </div>
        </div>
      </Alert>
    )
  );
}