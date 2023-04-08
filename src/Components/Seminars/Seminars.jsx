//Modules
import React from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "../../Styles/styles";

//Components
import TableComp from "../UI/TableComp";
import Gets from "../Gets/Gets";
import BackdropComp from "../UI/BackdropComp";


//Material UI
import { Typography, Button } from "@mui/material";
//Material UI Icons

export default function Seminars(props) {
    const navigate = useNavigate();
    const classes = useStyles;
    const LocalInstitutionsTable = (props) => {

        const titles = ['nome', 'CNPJ',];
        const keys = {
            type: '',
            description: '',
        };

        return <TableComp
            items={props.data}
            tableHead={titles}
            objkeys={keys}
            WhenClicked={(idt) => {
                return navigate(`/cadastros/empresas/${idt}`);
            }}
            addItem={() => {
                return navigate("/cadastros/empresas/thenewobject");
            }}
            whatToSearch={""}
        />
    }
    return (
        <BackdropComp
            back={props.back}
            title={<Typography variant="h5" color='primary'>
                Seminários Cadastrados </Typography>}
            content={
                <Gets route='seminars'>
                    <LocalInstitutionsTable />
                </Gets>
            }
        />
    )

}