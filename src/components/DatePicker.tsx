import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';

interface inputs{
    label: string;
    setDate: Function;
}

export default function BasicDatePicker({label, setDate}: inputs) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={label} 
        onChange={(newDate: Dayjs | null) => {
            setDate(newDate); 
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
