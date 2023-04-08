//React Libs import
import React, { useState } from "react";

//Components
//Styling imports

//MUI
import { Backdrop, Stack, Paper, IconButton, Divider } from "@mui/material";
import BackdropCompMobile from "./BackdropCompMobile";
import CloseIcon from '@mui/icons-material/Close';
export default function BackdropComp(props) {

    function LocalContent() {
        return <>
            {window.screen.width < 800
                ? <BackdropCompMobile
                    content={props.content} actions={props.actions}
                    children={props.children} back={props.back}
                    title={props.title} />
                : <Paper
                    className="nice-border-shadow scrollbar-hidden"
                    sx={props.small
                        ? {
                            zIndex: 100,
                            position: "relative",
                            padding: "5% 7%",
                        }
                        : {
                            width: "90vw",
                            height: "80vh",
                            overflow: "visible",
                            zIndex: 100,
                            position: "relative",
                            overflowY: "scroll",
                            padding: "1% 2%",
                        }}
                >
                    <Stack
                        direction={'column'}
                        width='100%'
                        height={'100%'}
                        alignItems='center'
                        justifyContent={'flex-start'}
                    >
                        <Stack
                            direction={'column'}
                            width='100%'
                            height={'100%'}
                            alignItems='flex-start'
                            justifyContent={'flex-start'}
                            spacing={2}
                        >

                            <Stack
                                direction={'row'}
                                width='100%'
                                alignItems='flex-start'
                                justifyContent={'space-between'}
                                spacing={2}
                            >
                                {props.title}
                                <IconButton onClick={props.back} > <CloseIcon /></IconButton>
                            </Stack>
                            <div style={{ width: "100%" }}>
                                <Divider />
                            </div>

                            <Stack
                                direction={'row'}
                                width='100%'
                                alignItems='flex-start'
                                justifyContent={'flex-start'}
                                spacing={2}
                            >
                                <Stack
                                    direction={'column'}
                                    width={props.actions ? '80%' : '100%'}
                                    alignItems='flex-start'
                                    justifyContent={'flex-start'}
                                    spacing={2}
                                >
                                    {props.content}
                                </Stack>
                                <Stack
                                    direction={'column'}
                                    width={props.actions ? '20%' : '0%'}
                                    height='100%'
                                    alignItems='center'
                                    justifyContent={'flex-start'}
                                    spacing={3}
                                >
                                    {props.actions}
                                </Stack>
                            </Stack>
                            {props.children}

                        </Stack>
                    </Stack>

                </Paper>
            }
        </>
    }


    return (
        props.notBackdrop
            ? <LocalContent />
            : <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <LocalContent />

            </Backdrop>
    );
}
