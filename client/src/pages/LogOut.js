import { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { cardMediaClasses, Dialog } from "@mui/material";
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import { useAuth } from "../components/Firebase/context/AuthContext";
import { Transition } from 'react-transition-group'

export default function LogOut({ modal, setModal }) {
    const cancelButtonRef = useRef(null);
    const navigate = useNavigate();
    const { signOutUser, setError } = useAuth();

    async function handleLogOut() {
        try{
            setError("");
            await signOutUser();
            setModal(false);
            navigate("/login");
        } catch {
            setError("Failed to log out. Please try again")
        }
    }

    return (
        <Transition.Root show={modal} as={Fragment}>
            <Dialog
                as="div"
                className="position-fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={modal}
            >
                <div className="flex items-end justify-center h-min pt-4 px-4 pb-20 text-center" >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity" />
                    </Transition.Child>
{/* //BELOW: "FINAGLES" BROWSER INTO CENTERING MODAL CONTENT  */}
                    <span className="visibility-hidden inline-block align-middle h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveTo="opacity-0 translate-y-4"
                    >
                        <div className="inline-block align-bottom bg-white rounded-3 text-left overflow-hidden shadow-xl transform transition-all">
                            <div className="bg-white px-4 pt-5 pb-4">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-123 w-12 rounded-4 bg-red">
                                    <CircleNotificationsOutlinedIcon className="h-6 w-6 text-red" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-md text-gray">
                                        Logging Out
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray">Are you sure you want to log out ?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray px-4 py-3">
                            <button 
                                type="button" 
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red text-base font-medium text-white hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
                                onClick={handleLogOut}
                            </button>
                            <button type="button" className="mt-3 w-full inline-flex justify-center shadow-sm px-4 py-2" onClick={() => setModal(false)} ref={cancelButtonRef}>Cancel</button>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
