import { useAuth } from "../components/Firebase/context/AuthContext";
import { useState, useEffect } from "react";

export default function Profile() {
const [displayName, setDisplayName] = useState("");
const [loading, setLoading] = useState(false);

const { currentUser, updateUserProfile, setError, error, navigate } = useAuth();

const handleFormSubmit = async (e) => {
    e.preventDefault();
    

    try {
      setError("");
      setLoading(true);
      const user = currentUser;
      const profile = {
        displayName: displayName,
      };
      await updateUserProfile(user, profile);
      navigate("/");
    } catch (e) {
       setError("Failed to update profile");
       alert(error);
    }
    setLoading(false);
  };


return (
    <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              id="displayName"
              name="displayName"
              type="text"
              autoComplete="displayName"
              required
              className="form-control mt-1"
              placeholder="Display Name"
              defaultValue={currentUser.displayName && currentUser.displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div>
            <button 
                type="submit" 
                value="submit" 
                className="btn btn-primary mt-2" 
                disabled={loading}>
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}