import { useState, forwardRef } from "react";
import Header from "./Header"
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Exam() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };

    return(
        <>
            <Header title={"Exam"} />
            <div className="flex flex-col items-center px-6 pb-12">
                <div className="">
                    <div className="max-w-lg bg-leaves bg-center bg-no-repeat bg-cover w-screen h-32 flex items-center rounded-3xl">
                        <h1 className="text-white ml-4 text-base">CT30A2804 User Interfaces and Usability</h1>
                    </div>
                </div>
                <div className="mt-8 scale-90 xs:scale-100 text-center text-onSurfaceVariant">
                    <div className="mb-4 grid grid-cols-5 gap-2 justify-items-center text-sm">
                        <div className="flex items-center">
                            <p className="semibold-text">Exam</p>
                        </div>
                        <div className="flex items-center">
                            <p className="semibold-text">Points</p>
                        </div>
                        <div className="flex items-center">
                            <p className="semibold-text">Grade</p>
                        </div>
                        <div className="flex items-center">
                            <p className="semibold-text">Total course %</p>
                        </div>
                        <div className="flex items-center">
                            <p className="semibold-text">Feedback</p>
                        </div>
                    </div>
                    <div className="py-5 grid grid-cols-5 gap-2 justify-items-center text-xs border-t border-outlineVariant">
                        <div className="flex items-center">
                            <p>Exam 1</p>
                        </div>
                        <div className="flex items-center">
                            <p>45/50</p>
                        </div>
                        <div className="flex items-center">
                            <p>5</p>
                        </div>
                        <div className="flex items-center">
                            <p>45.99%</p>
                        </div>
                        <Button className="!p-0" onClick={handleClickOpen}>
                            <svg className="text-[#8F4A4E] rounded-full" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.75 15h-1.5v-6h1.5v6zm0-8h-1.5V7h1.5v2z"/>
                            </svg>
                        </Button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                            slotProps={{
                                paper: {
                                    className: '!bg-surfaceContainerHigh !rounded-3xl !p-2 xs:!p-6',
                                },
                              }}
                        >
                            <DialogTitle className="!text-onSurface">{"Exam 1"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText className="!text-onSurfaceVariant" id="alert-dialog-slide-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button className="!text-primary" onClick={handleClose}>Continue</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </>
    )
}
