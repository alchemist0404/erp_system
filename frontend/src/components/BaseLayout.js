import React, { useState } from "react";
import clsx from "clsx";
import Header from "./Header";
import useStyles from "../assets/styles";

const BaseLayout = ({ children }) => {
    const classes = useStyles.base();
    const [open, setOpen] = useState(true);
    const openDrawer = () => {
        setOpen(true);
    };
    const closeDrawer = () => {
        setOpen(false);
    };
    return(
        <>
            <Header 
                open={open}
                openDrawer={openDrawer} 
                closeDrawer={closeDrawer} 
            />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                {children}
            </main>
        </>
    )
}
export default BaseLayout;