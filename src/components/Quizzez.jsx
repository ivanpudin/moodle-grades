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

export default function Quizzez() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };

    return(
        <>
            <Header title={"Quizzez"} />
            <div className="flex flex-col items-center px-6 pb-12">
                <div className="mt-14 w-full max-w-lg">
                    <div className="">
                        <p className="text-lg text-onSurfaceVariant semibold-text">Quiz completion (total)</p>
                    </div>
                    <div className="mt-4 bg-[#D9D9D9] h-12 rounded-full shadow-[inset_0_0_5px_4px_rgba(0,0,0,0.20)]">
                        <div className="bg-[#8F4A4E] h-12 w-[60%] rounded-full flex justify-end items-center">
                            <p className="mr-4 text-white text-base">60%</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 scale-90 xs:scale-100 text-center text-onSurfaceVariant">
                    <div className="mb-4 grid grid-cols-5 gap-2 justify-items-center text-sm">
                        <div className="flex items-center">
                            <p className="semibold-text">Quiz</p>
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
                            <p>Quiz 1</p>
                        </div>
                        <div className="flex items-center">
                            <p>2/3</p>
                        </div>
                        <div className="flex items-center">
                            <p>4</p>
                        </div>
                        <div className="flex items-center">
                            <p>15%</p>
                        </div>
                        <div className="flex items-center">
                            <p>-</p>
                        </div>
                    </div>
                    <div className="py-5 grid grid-cols-5 gap-2 justify-items-center text-xs border-t border-outlineVariant">
                        <div className="flex items-center">
                            <p>Quiz 2</p>
                        </div>
                        <div className="flex items-center">
                            <p>2/3</p>
                        </div>
                        <div className="flex items-center">
                            <p>4</p>
                        </div>
                        <div className="flex items-center">
                            <p>15%</p>
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
                            <DialogTitle className="!text-onSurface">{"Quiz 2"}</DialogTitle>
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
