//React Libs import
import React, { useState } from "react";

//Components
//Styling imports
import useStyles from "../../Styles/styles";
//MUI
import { Backdrop, Stack, Paper, IconButton, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
export default function BackdropCompMobile(props) {
    const classes = useStyles;
    const [infos, setInfos] = useState(false)
    function LocalContent() {
        return <Paper
            className="nice-border-shadow scrollbar-hidden"
            sx={{
                width: "95vw",
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
                        direction={'column'}
                        width={'100%'}
                        alignItems='flex-start'
                        justifyContent={'flex-start'}
                        spacing={2}
                    >
                        {props.actions && <Stack
                            direction={'row'}
                            width={'100%'}
                            alignItems='flex-end'
                            justifyContent={'flex-end'}
                            spacing={2}
                        >
                            <IconButton sx={classes.pinkGradBGC} onClick={(event) => { event.preventDefault(); setInfos(!infos) }} >
                                {infos ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
                            </IconButton>
                        </Stack>}

                        {infos ? props.actions : props.content}
                    </Stack>

                    {props.children}

                </Stack>
            </Stack>

        </Paper>
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
