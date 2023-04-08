import * as React from "react";
import ptBRLocale from "date-fns/locale/pt-BR";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const localeMap = {
    br: ptBRLocale,
};

export default function LocalizedTimePicker(props) {
    const [locale, setLocale] = React.useState("br");
    const [value, setValue] = React.useState(props.value);


    return (
        <Stack sx={{width:'100%'}} spacing={3}>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={localeMap[locale]}
            >

                <DatePicker
                sx={{ width: '100%' }}
                minDate={props.minDate || new Date()}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        props.selectedTime(newValue);
                    }}
                    renderInput={(params) => <TextField  {...params} />}
                />

            </LocalizationProvider>
        </Stack>
    );
}
