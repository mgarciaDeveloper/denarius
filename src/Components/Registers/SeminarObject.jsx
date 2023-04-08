
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { uniqueId } from "lodash";
import Axios from 'axios';


//components
import TimePicker from '../UI/TimePicker'
//Styling imports
import useStyles from '../../Styles/styles';
//------- MUI cores
import { Typography, Button, Paper, MenuItem, TextField } from '@mui/material';  // use it to any text style

import Stack from '@mui/material/Stack';

import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

//------- MUI icons


import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export default function SeminarObject(props) {

    const { thenewobject } = useParams();
    const navigate = useNavigate();
    const classes = useStyles;
    const [data, setData] = useState(); // Informações Vindas do Back para o Front
    const [values, setValues] = useState([]); // Informações que irão do Front para o Back
    const [showPassword, setShowPassword] = useState(false);
    const [posted, setPosted] = useState(false);
    const [erro, setErro] = useState({
        status: false,
        mensagem: "",
    });
    const [rusuretodelete, setRusuretodelete] = useState(false);

    const getObject = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            params: {
                identificador: thenewobject //'onovoprojeto' ou a ObjectId,
            },
            url: `${process.env.REACT_APP_BACK_SERVER_LOCATION}/theSeminar`,
        }).then((res) => {
            setData(res.data);
            setValues({
                ...res.data,
                maanaim: props.user._id
            });
        });
    }
    React.useEffect(() => {
        getObject();
    }, []);


    return (
        <Paper
            sx={{ width: "90%", height: "100%", padding: '5%' }}
        >
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}

            >
                {[{
                    name: 'people',
                    title: 'Inscritos',
                    type: 'number',
                    value: values.people,
                    placeholder: 'Digite o número de pessoas previstas para o seminário',
                    helperText: 'Digite o número de pessoas previstas para o seminário'

                },
                {
                    name: 'description',
                    title: 'Descrição',
                    type: 'text',
                    value: values.description,
                    multiline: true,
                    placeholder: "Escreva, de forma sucinta, um resumo do seminário",
                    helperText: "Escreva, de forma sucinta, um resumo do seminário"
                }].map((e, i) => {
                    return <TextField

                        sx={{ width: '100%', marginBottom: '2%' }}
                        placeholder={e.placeholder}
                        multiline={e.multiline}
                        label={e.title}
                        helperText={e.helperText}
                        type={e.type}
                        rows={e.multiline && 4}
                        name={e.name}
                        value={e.value}
                        onChange={(event) => {
                            setValues({
                                ...values,
                                [event.target.name]: event.target.value
                            });
                        }}
                    />
                })
                }
                <br /><hr style={{ width: "100%" }} /><br />
                {[
                    {
                        name: 'type',
                        title: 'Público Alvo',
                        type: 'text',
                        helperText: 'Selecione o Público Alvo do Evento',
                        value: values.type,
                        enum: ['Senhoras', 'Geral', 'Jovens', 'Cias', 'Varões']
                    },
                    {
                        name: 'status',
                        title: 'Status',
                        type: 'text',
                        helperText: 'Selecione o status atual do Seminário ',
                        value: values.status,
                        enum: ['Adiado', 'Cancelado', 'Confirmado']
                    }
                ].map((e, i) => {
                    return <TextField
                        id={e.name}
                        style={{ width: '100%', marginBottom: '2%' }}
                        select
                        label={e.title}
                        name={e.name}
                        defaultValue={e.value}
                        helperText={e.helperText}
                        onChange={(event) => { setValues({ ...values, [event.target.name]: event.target.value }) }}
                        value={e.value}

                    >
                        {e.enum.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                })}

                <TimePicker
                    minDate={new Date()}
                    selectedTime={(value) => { setValues({ ...values, ['when']: value }) }}
                />
            </Stack>
        </Paper>
    );
}
